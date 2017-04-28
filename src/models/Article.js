import {
  Model, attr,
  fk,  // 外键
  // oneToOne, // 1对1关系
  // many // 多对多？
} from "redux-orm";

export default class Article extends Model {
  static modelName = 'Article'
  static fields = {
    SaidId: attr(),
    STitle: attr(),
    STag: attr(),
    SSummaryTrim: attr(),
    SSummary: attr(),
    SScript: attr(),
    SReprint: attr(),
    SPV: attr(),
    SName: attr(),
    SIsTop: attr(),
    // 外键
    Image: fk('Image'),
    ImageId: attr(),
    SHTML: attr(),
    SJS: attr(),
    SCSS: attr(),
    SContext: attr(),
    SComment: attr(),
    SClick: attr(),
    Password: attr(),
    IsPrivate: attr(),
    Likes: attr(),
    SongId: attr(),
    // Song: fk('Song')
  }
}
