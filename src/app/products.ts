export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Curso: Figma',
    price: 799,
    description: 'Este é o início de sua jornada no Figma. O Figma é uma ferramenta de UI online e gratuita, feita para criar, colaborar e prototipar projetos.'
  },
  {
    id: 2,
    name: 'Curso: Branding',
    price: 620,
    description: 'Você vai aprender o passo a passo para desenvolver uma marca forte, desejada, atrativa e emocionalmente conectada com sua audiência. '
  },
  {
    id: 3,
    name: 'Curso: UX/UI Design',
    price: 702,
    description: 'Desenvolva de forma simples layouts para sites, sistemas e aplicativos móveis.'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/