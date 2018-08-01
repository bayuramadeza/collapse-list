import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation 
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import * as action from '../action';

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }
    renderDesdcription(){
        const {library, expanded } = this.props;

        if(expanded){
            return(
                <CardSection>
                    <Text>{ library.item.description }  </Text>
                </CardSection>
            );
        }
    }

    render() {
        const {id, title } = this.props.library.item;

        return( 
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleSize}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDesdcription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleSize:{
        fontSize: 18,
        paddingLeft: 15 
    }
};

const mapStateToProps = ( state, ownProps ) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return { expanded };
};

export default connect(mapStateToProps, action)(ListItem);