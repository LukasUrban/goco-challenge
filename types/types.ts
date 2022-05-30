export interface IInsuranceProduct {
  id: number,
  name: string,
  price: number,
  features: {
    'cover-start-date': string,
  }
}

export interface IPetProduct extends IInsuranceProduct {
  product: 'pet',
  features: IInsuranceProduct['features'] & {
    breed: 'Dog' | 'Cat'
  }
}

export interface ICarProduct extends IInsuranceProduct {
  product: 'car',
  features: IInsuranceProduct['features'] & {
    'cover-type': 'Comprehensive',
    claims: 'No previous claims',
    excess: number,
    'protected-ncb': boolean,
    'additional-drivers': 'No additional drivers'
  }
}

export type TQuotes = Array<ICarProduct | IPetProduct>;

export interface IQuote {
  quotes: TQuotes
}

export interface IFilterOptions { // TODO add another input types
  [key:string]: {
    inputType: 'radio',
    options?: {
      value: string,
      label: string,
      default?: boolean,
      count?: number
    }[],
  },
}

export interface IFilter {
  [key: string]: string | number,
}
