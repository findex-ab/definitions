import { EAssetType, IAsset } from "./asset"
import { IAttachment } from "./attachment"
import { IDBModel } from "./dbModel"
import { TDocRef } from "./docref"
import { IPaginated } from "./pagination"

export interface NewsArticleObject {
  type: string
  data: NewsArticle
}

export interface NewsArticle {
  id: number
  name: string
  name_puff: string
  slug: string
  date: Date
  updated: string
  userId: number
  body: string
  ingress: string
  ingress_puff: string
  image: string
  imageWidth: number
  imageHeight: number
  imageTop: number
  imageLeft: number
  status: number
  photoName: string
  photoAltText?: string
  imageText: string
  sponsored: number
  sponsoredText?: string
  sponsorId?: number
  isGuide: number
  videoId?: string
  isPremium: boolean
  political: number
  opinion: string
  showTip: number
  imageTextType: number
  puffPrefix: string
  showPremiumPreview: number
  fullWidth: number
  isOpinion: number
  opinionAuthor: string
  sesamyEnabled: number
  sesamyPrice: any
  imagePath: string
  formattedTrackers: any[]
  factboxes: any[]
  story_tags: any[]
  subject_tags: SubjectTag[]
  companies: Company[]
  persons: NewsArticlePerson[]
  user: NewsArticleUser
  sponsor?: NewsArticleSponsor
  resource_locks: any[]
}

export type FindexNewsArticle = Omit<NewsArticle, 'id'> & {
  externalId: number;
  tag?: EAssetType | string;
} 

export interface SubjectTag {
  id: number
  name: string
  slug: string
  description: any
  shortDescription: any
  type: string
}

export interface Company {
  id: number
  logo?: string
  name: string
  placeid?: string
  description?: string
  url?: string
  company_type: number
  date: string
  slug: string
  shortDescription?: string
  image?: string
  imageWidth?: number
  imageHeight?: number
  imageLeft?: number
  imageTop?: number
  facts?: string
  type: string
  imagePath?: string
}

export interface NewsArticlePerson {
  id: number
  name: string
  description?: string
  logo: any
  slug: string
  shortDescription?: string
  image?: string
  imageWidth?: number
  imageHeight?: number
  imageLeft?: number
  imageTop?: number
  facts?: string
  url?: string
  type: string
  imagePath?: string
}

export interface NewsArticleUser {
  id: number
  email: string
  firstname: string
  lastname: string
  image?: string
  columnistImage: any
  socialtag: string
  socialtag_link: string
  title: string
  description: string
  chronicletitle: string
  chronicletitle_slug: string
  columnist: number
  slug: string
  isAdmin: number
  imagePath?: string
  fullName: string
}

export interface NewsArticleSponsor {
  id: number
  name: string
  logo: any
  externalUrl: string
  description: string
}


export type FindexNewsResponse = IPaginated<FindexNewsArticle>;

export type INewsItem = IDBModel & {
  title: string;
  body: string;
  tldr?: string;
  externalId: string;
  externalDate?: Date;
  url?: string;
  image?: string;
  tags?: string[];
  externalTags?: string[];
  assets?: TDocRef<IAsset>[];
  source?: string;
  sourceLogo?: TDocRef<IAttachment>;
  symbol?: string;
  hasEmbedding?: boolean;
  embeddingPointId?: number;
}
