import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderTitle = ({ iconUrl, dimension}) => {
    return (
        <TouchableOpacity style={styles.btnTitle}>
            <Image
                source={iconUrl}
                resizeMode='cover'
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    )
}

export default ScreenHeaderTitle