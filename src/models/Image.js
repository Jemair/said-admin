import {
  Model, attr,
} from "redux-orm";

export default class Image extends Model {
  static modelName = 'Image'
  static fields = {
    ImageId: attr(),
    IName: attr(),
    IFileName: attr(),
    ISize: attr(),
    Type: attr(),
    UserID: attr(),
    ReferenceCount: attr(),
  }
}
