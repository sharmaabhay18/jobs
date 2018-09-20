import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slide extends Component {

renderLastSlide(index) {
  if (index === this.props.data.length - 1) {
    return (
      <Button
         title='Onwards!'
         raised
         buttonStyle={style.buttonStyle}
         containerViewStyle={{ marginTop: 15 }}
         onPress={this.props.onComplete}
      />
    );
  }
}

  renderSlide() {
    return this.props.data.map((slide, index) => {
           return (
             <View style={[style.slide, { backgroundColor: slide.color }]} key={slide.text}>
              <Text style={style.slideText}>{slide.text}</Text>
               {this.renderLastSlide(index)}
             </View>
           );
         });
  }

  render() {
    return (
      <ScrollView
       horizontal
       pagingEnabled
      >
        {this.renderSlide()}
      </ScrollView>
    );
  }
}

const style = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
 slideText: {
   fontSize: 30,
   color: 'white',
   textAlign: 'center'
 },
 buttonStyle: {
   backgroundColor: 'black'
 }
};

export default Slide;
