export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-car-front',
        title: '3',
        subtitle: 'Veiculos cadastrados'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-coin',
        title: '$1k',
        subtitle: 'Refund given'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        title: '456',
        subtitle: 'Yearly Project'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        title: '210',
        subtitle: 'Weekly Sales'
    },

] 