import { iEnum, iEnumItem, iCommentable, iField, iEntity } from './Interfaces';
import dedent from 'dedent-js';

import {
  $Commentable, $EntityDirection,
  $EntityType, $EnumItem,
  $Field,
  $ReqMethod
} from '@wuapi/essential';

function translateEntityOrMap(res: iEntity | {[key: string]: iEntity}): Entity | {[key: string]: Entity} {
  if(res instanceof Entity){
    return res as Entity
  } else {
    const key = Object.keys(res)[0]
    let result: any = {}
    result[key] = (res as any)[key] as Entity
    return result
  }
}

function translateEnumOrMap(res: iEnum | {[key: string]: iEnum}): Enum | {[key: string]: Enum} {
  if(res instanceof Enum){
    return res as Enum
  } else {
    const key = Object.keys(res)[0]
    let result: any = {}
    result[key] = (res as any)[key] as Enum
    return result
  }
}

/**
 * Wrapper of Essentual $Commentable.
 * Adding cmt() function.
 */
class Commentable<T> extends $Commentable implements iCommentable<T> {

  cmt(comment: string): T {
    this.comment = dedent(comment)
    return (this as any) as T
  }
}

/**
 * Enumeration item.
 */
export class EnumItem extends Commentable<iEnumItem> implements iEnumItem {
  realname: string | null = null

  /**
   * Constructor of enumeration item.
   * @param value The number value of the item, it's mandatory.
   */
  constructor( public value: number){ 
    super() 
  }

  ren(realname: string): iEnumItem {
    this.realname = realname
    return this
  }
}

/**
 * Definition class of enumeration
 */
export class Enum extends Commentable<iEnum> implements iEnum {
  items = new Map<string, EnumItem>()

  setItems(config: {[key: string]: EnumItem}): Enum {
    for(let key in config){
      this.items.set(key, config[key])
    }
    return this
  }
}

/**
 * Create an iEnum instance.
 * @returns newly created {@see iEnum } instance
 */
export function createEnum(): iEnum {
  return new Enum()
}

/**
 * Convenient function to create enumeration item.
 * @param v The number value of the new item.
 * @returns The newly created enumeration item.
 */
export function itm(v: number): EnumItem {
  var result = new EnumItem(v)
  return result
}

/**
 * Definition class of entity field
 */
export class Field extends Commentable<iField> implements iField {
  realname: string | null = null
  optional: boolean = false
  isPathParameter: boolean = false
  fixed: any | null = null

  opt(): iField {
    this.optional = true
    return this
  }

  ren(realname: string): iField {
    this.realname = realname
    return this
  }

  pth(): iField {
    this.isPathParameter = true
    return this
  }

  fix(v: any | null): iField{
    this.fixed = v
    return this
  }
}

export class IntegerField  extends Field {}
export class LongField     extends Field {}
export class DoubleField   extends Field {}
export class IDField       extends Field {}
export class URLField      extends Field {}
export class DateTimeField extends Field {}
export class BooleanField  extends Field {}
export class StringField   extends Field {}
export class SSMapField    extends Field {}

export class ListField     extends Field { constructor(public member: Field ){ super() } }
export class UnknownField  extends Field { constructor(public name:   string){ super() } }

export class EnumField extends Field {
  constructor(public enu: Enum | {[key: string]: Enum}){
    super()
  }
}

export class ObjectField extends Field {
  constructor(public entity: Entity | {[key: string]: Entity}){
    super()
  }
}

export function  int(): IntegerField { return new IntegerField  () }
export function  lng(): LongField    { return new LongField     () }
export function  dbl(): DoubleField  { return new DoubleField   () }
export function  idd(): IDField      { return new IDField       () }
export function  url(): URLField     { return new URLField      () }
export function  tim(): DateTimeField{ return new DateTimeField () }
export function  boo(): BooleanField { return new BooleanField  () }
export function  str(): StringField  { return new StringField   () }
export function  s2s(): SSMapField   { return new SSMapField    () }

export function  lst(member: Field    ): ListField    { return new ListField    (member) }
export function  unknown(name: string ): UnknownField { return new UnknownField (name  ) }

export function obj(element: iEntity | {[key: string]: iEntity}): ObjectField {
  return new ObjectField(translateEntityOrMap(element))
}

export function enu(element: iEnum | {[key: string]: iEnum}): EnumField {
  return new EnumField(translateEnumOrMap(element))
}


/**
 * Definition of object entity.
 */
export class Entity extends Commentable<iEntity> implements iEntity {
  abstract  = false
  fields    = new Map<string, Field>()
  knownMap  = new Map<string, Field>()
  type      = $EntityType.OBJECT
  response  : Entity | {[key: string]: Entity} | null = null
  path      : string | null = null
  parent    : Entity | null = null
  direction : $EntityDirection | null = null
  method    : $ReqMethod | null = null

  know(name: string, field: iField): iEntity {
    this.knownMap.set(name, field as Field)
    return this
  }

  setFields(config: {[key: string] : iField}): iEntity {
    for(let key in config){
      this.fields.set(key, config[key] as Field)
    }
    return this
  }
  
  setMethod(m: $ReqMethod | null | undefined): iEntity {
    this.method = m ?? null
    return this
  }

  /**
   * Specify the direction of this entity to virgo to taurus.
   * @returns this entity
   */
  v2t(): iEntity {
    this.direction = $EntityDirection.V2T
    return this
  }

  t2v(): iEntity {
    this.direction = $EntityDirection.T2V
    return this
  }

  abs(): iEntity {
    this.abstract = true
    return this
  }

  req(res: iEntity | {[key: string]: iEntity}): iEntity {
    this.type = $EntityType.REQUEST
    this.response = translateEntityOrMap(res)
    return this
  }

  res(): iEntity {
    this.type = $EntityType.RESPONSE
    return this
  }

  pth(path: string): iEntity {
    this.path = path
    return this
  }

  extends(_entity: iEntity): iEntity {
    const entity = _entity as Entity
    this.parent = entity
    if(entity.type != $EntityType.OBJECT){
      this.type = entity.type
    }
    if(!this.comment){
      this.comment = entity.comment
    }
    return this
  }
}

export function createEntity(): iEntity {
  return new Entity()
}

/**
 * Definition of module.
 */
export class Module {
  entities = new Map<string, Entity>()
  enums = new Map<string, Enum>()

  /**
   * Constructor of module.
   * @param name The initial name of this module.
   * @param project The project where this module belongs to.
   * @param config The raw config object
   */
  constructor(
    public name: string,
    public project: Project,
    config: any,
  ){
    this.name = config['moduleName'] ?? name

    for(const key in config){
      const obj = config[key]

      if(obj instanceof Entity){
        this.entities.set(key, obj as Entity)
      }

      if(obj instanceof Enum){
        this.enums.set(key, obj as Enum)
      }
    }
  }
}

/**
 * Definition of project.
 */
export class Project{
  modules = new Map<string, Module>()

  /**
   * Constructor of project.
   * @param name The name of the project
   * @param version The version of the project
   * @param targetPackage The package (for Java & Kotlin) into which the entities 
   */
  constructor (
    public name: string,
    public version: string,
    public targetPackage: string
  ){}

  /**
   * Add modules to this project.
   * @param config Map of modules
   * @returns this project
   */
  setModules(config: {[key: string]: Object}): Project {
    for(var m in config){
      const module = new Module(m, this, config[m] as any)
      module.project = this
      this.modules.set(module.name, module)
    }

    return this
  }
}