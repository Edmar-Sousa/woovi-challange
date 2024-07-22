import { InstallmentType } from '../Interfaces/Installment'


export function getOptionsTimeline(installment: InstallmentType, total: number) {

    if (installment.times == 1) {
        return [
            {
                title: '1ª entrada unica no Pix',
                value: total,
                routername: 'pix-qrcode.pix',
                activite: ''
            }
        ]
    }


    return [
        {
            title: '1ª entrada no Pix',
            value: installment.value,
            routername: 'pix-qrcode.pix',
            activite: ''
        },
        {
            title: '2ª no cartão',
            value: installment.value * (installment.times - 1),
            routername: 'pix-qrcode.credit-card',
            activite: ''
        }
    ]

}