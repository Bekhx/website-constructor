import image from './assets/image.png'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks'
import { css } from './utils'

export const model = [
    new TitleBlock ('BekH site-constructor', {
        tag: 'h1',
        styles: css({
            padding: '20px 0',
            background: 'linear-gradient(to left, #1f4037, #99f2c8)',
            color: 'darkslategray',
            'font-size': '36px',
            'font-weight': 'bold',
            'text-align': 'center'
        })
    }),
    new ImageBlock (image, {
        styles: css({
            background: 'crimson',
            display: 'flex',
            'justify-content': 'center'
        }),
        alt: 'img mountain',
        imgStyles: 'border-radius: 8px; max-width: 500px; height: auto; margin: 20px 0;'
    }),
    new TextBlock ('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod possimus at unde. Consectetur explicabo illo delectus esse vero veniam temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod possimus at unde. Consectetur explicabo illo delectus esse vero veniam temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod possimus at unde. Consectetur explicabo illo delectus esse vero veniam temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod possimus at unde. Consectetur explicabo illo delectus esse vero veniam temporibus.', {
        styles: css({
            padding: '20px 0',
            background: 'linear-gradient(to left, #000000, #434343)',
            color: '#fff'
        }),
    }),
    new TextColumnsBlock ([
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod possimus at unde. Consectetur explicabo illo delectus esse vero veniam temporibus.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod possimus at unde. Consectetur explicabo illo delectus esse vero veniam temporibus.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod possimus at unde. Consectetur explicabo illo delectus esse vero veniam temporibus.'
    ], {
        styles: css({
            color: 'darksalmon',
            padding: '1rem',
            background: 'linear-gradient(to right, #000000, #434343'
        })
    })
]