import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const STARTING_PAGE = 0

const PaginationComponent = () =>{
    const Box = ({id, style}) =>{
        if (id === page + 1){
            return(
                <Text style={[styles.box, styles.active]}>{id}</Text>
            );
        }
        return(
            <Text style={styles.box}>{id}</Text>
        );
    }
    const [page, setPage] = useState(0);
    const [currentPrev, setPrev] = useState(true);
    const [currentNext, setNext] = useState(false);
    
    showPreviousPage = () => {
        setPage(page - 1);
        setNext(false);
        if (page -1 === STARTING_PAGE){
            setPrev(true)
        }
    }

    showNextPage = () => {
       setPage(page + 1 );
       setPrev(false);
    }

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const itemsToDisplay = 4
    const startIndex = page * itemsToDisplay;
    const visibleItems = items.slice(page, page + itemsToDisplay);
    useEffect(() =>{
        if(visibleItems.length === 1){
            setNext(true);
        }
        
    },[visibleItems.length])

    return (
        <View style={styles.container}>
            <View style={styles.prev}>
                <Pressable onPress={showPreviousPage} disabled={currentPrev}>
                        <Text style={{fontWeight: 'bold', color: '#0C2A66', padding: 10}}>Prev</Text>
                </Pressable>
            </View>
            
            <View style={{flex: 1, flexDirection: 'row'}}>
                {visibleItems.map(id => <Box id={id}  />)}
            </View>   

            <View style={styles.next}>
                <Pressable onPress={() => showNextPage()} disabled={currentNext}>
                        <Text style={{fontWeight: 'bold', color: '#0C2A66', padding: 10}}>Next</Text>
                </Pressable>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
container: {
    flexDirection:'row',
    flex: 1,
    marginTop: 30,
    maxWidth: deviceWidth * 0.7,
    alignSelf: 'center'
},
active:{
    backgroundColor: '#0C2A66',
    color: '#fff'
},
box: {
    backgroundColor:'#E7E7E7',
    height: deviceHeight * .05,
    width: deviceWidth * .1,
    marginLeft: 5,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    borderRadius: 100,
    lineHeight: 29
},
next: {
    position: 'relative',
    bottom: deviceHeight * .007,
    left: deviceWidth *.05,
},

prev: {
    position: 'relative',
    bottom: deviceHeight * .007,
    right: deviceWidth *.01,
},
});

export default PaginationComponent;