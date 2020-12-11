import {TokenDecoder} from './TokenDecoder';
import {Md5} from 'ts-md5';
import {HttpHeaders} from '@angular/common/http';
import * as moment from 'moment';
import {v4 as uuidv4} from 'uuid';

export const BASE_URL = 'https://newsapi.africahash.com';
export const ZONE = 'ZM';

export const TOKENINFO = {
  EMAIL_ID: 'EMAIL_ID',
  TOKEN_ID: 'TOKEN_ID',
  SITE_ID: 'SITE_ID',
  ROLE_ID: 'ROLE_ID',
  EXP_DATE: 'EXP_DATE',
};

export class Util {

  public static tokenDecoder: TokenDecoder = new TokenDecoder();


  private static getDecodedToken(): any {
    const token = this.getToken();
    if (token != null) {
      return this.tokenDecoder.decodeToken(token);
    }
  }

  static getId(): string {
    return Md5.hashStr(uuidv4()).toString();
  }

  static generateSiteCode(name: string): string {
    return Md5.hashStr(name).toString();
  }


  static getEmail(): string {
    const dtoken = this.getDecodedToken();
    if (dtoken != null) {
      return dtoken.email;
    }

  }

  static getTokenExpiryDate(): any {
    const token = this.getToken();
    if (token != null) {
      return this.tokenDecoder.getTokenExpirationDate(this.getToken());
    }
  }

  static getSiteId(): string {
    const dtoken = this.getDecodedToken();
    if (dtoken != null) {
      return dtoken.siteId;
    }

  }


  static getToken(): string {
    return localStorage.getItem(TOKENINFO.TOKEN_ID);
  }

  static getRole(): any {
    const dtoken = this.getDecodedToken();
    if (dtoken != null) {
      return dtoken.role;
    }


  }

  static getDate() {
    return new Date();
  }

  static isTokenExpired(tokenValue: string): boolean {
    return this.tokenDecoder.isTokenExpired(tokenValue, 2);
  }

  static getSiteCode(): string {
    return this.getSiteId();
  }

  static isTokenValid(): boolean {
    let check = false;
    const saveToken = this.getToken();
    if (saveToken != null) {
      this.getDecodedToken();
      check = true;
    }
    return check;
  }

  static headers(): HttpHeaders {
    const site = this.getSiteCode();
    const username = this.getEmail();
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('site', site);
    headers.set('Authorization', this.getToken());
    headers.set('email', username);
    return headers;
  }

  // get last day in previous month
  static getPreviousMonth() {
    const date = new Date();
    date.setDate(1);
    date.setHours(-1);
    return date;
  }

  static getUserId() {
    const dtoken = this.getDecodedToken();
    return dtoken.USERID;
  }

  static DateTime(date: Date) {
    return new Date(moment(date).format('YYYY-MM-DD HH:mm:ss'));
  }

  static isUserLoggenIn() {
    const token = this.getToken();
    if (token != null) {
      if (this.isTokenValid() || this.isTokenExpired(token)) {
        return true;
      }
    } else {
      return false;
    }
  }

}
