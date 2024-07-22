import { defineStore } from 'pinia'

import { InstallmentType, PaymentDataType } from '../Interfaces/Installment'



interface PaymentStoreType {
    value: number
    username: string

    installment: InstallmentType,
}


export const usePaymentStore = defineStore({
    id: 'paymentStore',

    state: (): PaymentStoreType => ({
        value: 0,
        username: '',

        installment: {
            interest: 0,
            times: 0,
            value: 0,
        }
    }),

    getters: {
        total: state => state.installment.times * state.installment.value,
        cet: state => (state.installment.interest - 1).toFixed(2),
        timesCreditCard: state => state.installment.times - 1,
        totalCreditCard: state => state.installment.value * (state.installment.times - 1)
    },

    actions: {
        setPaymentData(data: PaymentDataType) {
            this.value = data.paymentValue
            this.username = data.username
        },

        setInstallment(installment: InstallmentType) {
            this.installment = installment
        }
    }
})
