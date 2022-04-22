import { InMemoryDbService } from 'angular-in-memory-web-api';

export class inMemoryDataService implements InMemoryDbService{
  public async createDb(){
    var transferencias = [
      {
        "id": "1",
        "valor": 35,
        "destino": "Invertimentos Fii's",
        "data": "2020-11-04T16:30:10.710Z"
      },
      {
        "id": "2",
        "valor": 40,
        "destino": "Gasolina",
        "data": "2020-11-04T21:24:10.710Z"
      },
      {
        "id": "3",
        "valor": 12.5,
        "destino": "Lanche",
        "data": "2020-11-05T21:14:10.710Z"
      },
      {
        "valor": 150,
        "destino": "internet",
        "data": "2022-03-31T11:35:52.979Z",
        "id": "dyAtPXS"
      },
      {
        "valor": 25,
        "destino": "Arrumar Pneu",
        "data": "2022-03-31T11:38:04.275Z",
        "id": "QanEhR_"
      },
      {
        "valor": 47.66,
        "destino": "Aliexpress",
        "data": "2022-03-31T11:39:40.155Z",
        "id": "D620Y_I"
      },
      {
        "valor": 102.66,
        "destino": "internet atrasada",
        "data": "2022-03-31T14:52:49.981Z",
        "id": "3V9CRDs"
      }
    ]
    return {transferencias}
  }

}
