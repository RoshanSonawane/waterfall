import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
country: any = [];
operator1078: any = [];
  constructor() {
    this.country = 
    [
    {
        "id": 1078,
        "name": "SAUDI ARABIA",
        "status": null,
        "operatorid": null,
    },
    {
        "id": 1084,
        "name": "ECUADOR",
        "status": null,
        "operatorid": null
    },
    {
        "id": 1091,
        "name": "NEPAL",
        "status": null,
        "operatorid": null
    }
    ]

    this.operator1078 = [
      {
          "id": 8899,
          "territoryId": 1078,
          "name": "STC",
          "status": 1,
          "baseUrl": null,
          "defaultcampaignid": null,
          "pollStatus": null,
          "pollmaxClick": null
      },
      {
          "id": 8902,
          "territoryId": 1078,
          "name": "LEBARA",
          "status": 1,
          "baseUrl": null,
          "defaultcampaignid": null,
          "pollStatus": null,
          "pollmaxClick": null
      },
      {
          "id": 8903,
          "territoryId": 1078,
          "name": "MOBILY KSA",
          "status": 1,
          "baseUrl": null,
          "defaultcampaignid": null,
          "pollStatus": null,
          "pollmaxClick": null
      },
      {
          "id": 8904,
          "territoryId": 1078,
          "name": "REDBULL",
          "status": 1,
          "baseUrl": null,
          "defaultcampaignid": null,
          "pollStatus": null,
          "pollmaxClick": null
      },
      {
          "id": 8966,
          "territoryId": 1078,
          "name": "ZAIN KSA",
          "status": 1,
          "baseUrl": null,
          "defaultcampaignid": null,
          "pollStatus": null,
          "pollmaxClick": null
      },
      {
          "id": 9043,
          "territoryId": 1078,
          "name": "VIRGIN",
          "status": 1,
          "baseUrl": null,
          "defaultcampaignid": null,
          "pollStatus": null,
          "pollmaxClick": null
      }
      ]
   }

}
