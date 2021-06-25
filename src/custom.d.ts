declare module '@wyndrick/react-native-yookassa' {
  import * as React from 'react';
  import * as ReactNative from 'react-native';
  export interface YookassaOptions {}

  export interface YookassaProps
    extends YookassaOptions,
      ReactNative.ViewProps {} // ViewProperties -> ViewProps

  export enum PaymentType {
    SBERBANK = 'SBERBANK',
    BANK_CARD = 'BANK_CARD',
    GOOGLE_PAY = 'GOOGLE_PAY',
    YOO_MONEY = 'YOO_MONEY',
  }

  export enum SavePaymentMethod {
    ON = 'ON',
    OFF = 'OFF',
    USER_SELECTS = 'USER_SELECTS',
  }
  export interface ITokenizationResult {
    paymentToken: string;
    paymentMethodType: string;
    status: 'RESULT_OK' | 'RESULT_CANCELED' | 'RESULT_ERROR';
  }
  export default class Yookassa extends React.Component<YookassaProps> {
    static initialize: (
      shopId: string,
      token: string,
      clientId?: string | null,
    ) => any;
    static tokenization: (
      title: string,
      desc: string,
      summ: number,
      paymentType:
        | string
        | PaymentType.SBERBANK
        | PaymentType.BANK_CARD
        | PaymentType.GOOGLE_PAY
        | PaymentType.YOO_MONEY,
      savePaymentMethods:
        | string
        | SavePaymentMethod.ON
        | SavePaymentMethod.OFF
        | SavePaymentMethod.USER_SELECTS,
      testParameters: {
        showLogs: boolean; //(Boolean) - включить отображение логов SDK. Все логи начинаются с тега 'YooKassa.SDK'
        googlePayTestEnvironment: boolean; //(Boolean) - использовать тестовую среду Google Pay
        completeWithError: boolean; // (Boolean) - токенизация всегда возвращает ошибку;
        paymentAuthPassed: boolean; // (Boolean) - пользователь всегда авторизован;
        linkedCardsCount: number; // (Int) - количество карт, привязанных к кошельку пользователя;
        serviceFee: number; // (Int) - количество карт, привязанных к кошельку пользователя;
      },
    ) => Promise<ITokenizationResult>;
    static paymentTypes: PaymentType;
    static savePaymentMethods: SavePaymentMethod;
  }
}
