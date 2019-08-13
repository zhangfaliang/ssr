import { Carousel } from 'antd';
import styles from './index.less'
export default () => {
    return <div className={styles.banner}>
        <Carousel effect="fade" autoplay>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Carousel>
    </div>
}

