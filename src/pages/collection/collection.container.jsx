import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selector'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import CollectionsPage from './collection.component'

const mapStateToProps = createStructuredSelector(
    {
        isLoading: state => !selectIsCollectionLoaded(state)
    }

)

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsPage)

export default CollectionPageContainer;