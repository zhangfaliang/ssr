import React,{ PureComponent } from 'react';
import classnames from 'classnames';
import styles from './'idnex.less;

class SelfdomTitle extends PureComponent{

    render(){
        const { preFixCls } =this.props; 
      const selfdomCls =   classnames({
          [styles[`${preFixCls}-title`]]:true
      })
        return (
            <div className={selfdomCls} >
                <div className={styles.left}> 1 </div>
                <div  className={styles.right}>  2 </div>
            </div>
        ) 
    }
}
SelfdomTitle.defaultProps={
    preFixCls:'default',

}
export default SelfdomTitle