export enum EAuthenticationMethod {
  PASSWORD = 'PASSWORD',
  BANKID = 'BANKID',
	GOOGLE = "GOOGLE"
}

export type AuthJWT = {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  iss: string;
  aud: string;
  iat: number;
  exp: number;
  scope?: string;
  gty?: string;
  sub: string;
  sid: string;
  nonce: string;
}
