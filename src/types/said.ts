import { AdminModel } from './admin'
import { ImageModel } from './image'
import { SongModel } from './song'

export interface SaidDemoModel {
  key: number,
  name: string,
  context: string,
}

/**
 * Said Model(听说)
 */
export interface SaidModel {
  /**
   * mongoDB 默认 ID
   */
  _id: string,
  /**
   * said 标题
   */
  title: string,
  /**
   * 标记，可以自定义，也可以自动生成，url 中使用
   */
  urlKey: string,
  /**
   * 作者信息
   */
  author: AdminModel
  /**
   * 描述
   */
  summary: string,
  /**
   * 文件名
   */
  fileName: string,

  /**
   * said 配图海报
   */
  poster: ImageModel

  /**
   * said 引用的歌曲
   */
  song: SongModel
  /**
   * 发布时间时间戳
   */
  createTime: number,
  /**
   * 处理过后的资源
   */
  other: {
    /**
     * 处理后的 XML
     */
    xml: string,
    /**
     * 处理后的 HTML
     */
    html: string,
    /**
     * 处理后的描述 HTML
     */
    summaryHTML: string,
  },
  /**
   * 相关信息
   */
  info: {
    /**
     * 访问量
     */
    pv?: number,
    /**
     * 喜欢数
     */
    likeCount?: number,
    /**
     * 评论数
     */
    commentCount?: number,
    /**
     * 最后一次更新时间戳
     */
    updateTime: number,
  }
  /**
   * 配置
   */
  config: {
    /**
     * 是否私有
     */
    isPrivate?: boolean,
    /**
     * 排序规则
     */
    sort?: number,
    /**
     * script 脚本
     */
    script?: string,
    /**
     * css 脚本
     */
    css?: string,
  }
}