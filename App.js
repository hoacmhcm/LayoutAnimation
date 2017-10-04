import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform, LayoutAnimation, TouchableOpacity, UIManager } from 'react-native'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            widthSquare: 100,
            heightSquere: 100,
        };
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    _animateSquare() {
        var CustomLayoutSpring = {
            duration: 2000,
            create: {
                type: LayoutAnimation.Types.spring,
                property: LayoutAnimation.Properties.scaleXY,
                springDamping: 0.7,
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 0.7,
            },
        };
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        LayoutAnimation.configureNext(CustomLayoutSpring);
        
        this.setState({
            widthSquare: 200,
            heightSquere: 200,
        });
    };

    _animateSquare2() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({
            widthSquare: 100,
            heightSquere: 100,
        });
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}>
                    <View style={{ backgroundColor: 'blue', width: this.state.widthSquare, height: this.state.heightSquere }}>

                    </View>
                    <TouchableOpacity onPress={() => { this._animateSquare() }}>
                        <Text style={styles.button}>Expand</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this._animateSquare2() }}>
                        <Text style={styles.button}>Collapse</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    view1: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view2: {
        flex: 1,
        backgroundColor: 'blue',
    },

    button: {
        marginTop: 50,
        backgroundColor: 'green'
    }
});


// import React, { Component } from 'react'
// import { View, LayoutAnimation, TouchableOpacity, Text, StyleSheet ,UIManager,Platform} from 'react-native'

// export default class App extends Component {
//     constructor() {
//         super();
//         // this.state = {
//         //     widthSquare: 100,
//         //     heightSquere: 100,
//         // };
//         if (Platform.OS === 'android') {
//             UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
//         }
//     }
//     state = {
//         myStyle: {
//             height: 100,
//             backgroundColor: 'red'
//         }
//     }
//     expandElement() {
//         LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
//         this.setState({
//             myStyle: {
//                 height: 400,
//                 backgroundColor: 'red'
//             }
//         });
//     }
//     collapseElement() {
//         LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

//         this.setState({
//             myStyle: {
//                 height: 100,
//                 backgroundColor: 'red'
//             }
//         });
//     }
//     render() {
//         return (
//             <View>
//                 <View>
//                     <View style={this.state.myStyle}>
//                     </View>

//                     <TouchableOpacity onPress={() => { this.expandElement() }}>
//                         <Text style={styles.button}>Expand</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={() => { this.collapseElement() }}>
//                         <Text style={styles.button}>Collapse</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     button: {
//         borderWidth: 1,
//         borderColor: 'red',
//         color: 'red',
//         textAlign: 'center',
//         marginTop: 50,
//         padding: 10
//     }
// })