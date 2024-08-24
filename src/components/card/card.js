import cardStyles from './card.module.css';

const Card = (props) => {
    return <>
        <div className={cardStyles.card} style={{
            height: props.height || '10rem',
            width: props.width || '10rem',
            margin: props.margin || '0.25rem',
            padding: props.padding || '0.5rem',
            backgroundColor: props.backgroundColor || 'rgba(80, 83, 84, 0.982)',
            borderRadius: props.borderRadius || '10px'
        }}>
            {props.content}
        </div>
    </>;
}

export default Card;