import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, FontAwesome, Feather } from '@expo/vector-icons';

const Screen = () => {
  const [likeCount1, setLikeCount1] = useState(0);
  const [likeCount2, setLikeCount2] = useState(0);
  const [likeCount3, setLikeCount3] = useState(0);

  const incrementLike1 = () => {
    setLikeCount1(likeCount1 + 1);
  };

  const incrementLike2 = () => {
    setLikeCount2(likeCount2 + 1);
  };

  const incrementLike3 = () => {
    setLikeCount3(likeCount3 + 1);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heading}>
        <Text>facebook</Text>
      </View>
      
      <View style={styles.image}>
      <Image source={require("./plus.jpeg")} style={styles.image} />
      <Image source={require("./search.png")} style={styles.image} />
      <Image source={require("./threeline.jpeg")} style={styles.image} />
      </View>

      <View style={styles.profile}>
        <View style={styles.kkkk}>
        <View style={styles.profileBox}></View>
          <View style={styles.one}>
            <Text>Whats on your mind?</Text>
          </View>
        </View>
      </View>

      <View style={styles.stories}>
      <Image source={require("./status11.jpeg")} style={styles.stories} />
      <Image source={require("./status22.jpg")} style={styles.stories} />
      <Image source={require("./status33.jpg")} style={styles.stories} />
      <Image source={require("./status44.jpeg")} style={styles.stories} />
      <Image source={require("./status55.jpeg")} style={styles.stories} />
      <Image source={require("./sharist.jpg")} style={styles.stories} />
       
      </View>

      <View style={styles.aaaa}>
        <View style={styles.bbbb}>
          <View style={styles.iiii} >
            <View style={styles.profileBox}></View>
            <View style={styles.active}>
              <Text>Seeiso Mohapi</Text>
              <Text>41 min ago</Text>
            </View>
          </View>
          <Text>...X</Text>
        </View>
        <Text>02:54 AM Ke mang a shebileng re rapele?</Text>
      </View>

      <View style={styles.two}>
        <TouchableOpacity onPress={incrementLike1} style={styles.likeButton}>
          <SimpleLineIcons name="like" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.likeCount}>{likeCount1}</Text>
        <FontAwesome name="comment-o" size={24} color="black" />
        <Feather name="share-2" size={24} color="black" />
      </View>

      <View style={styles.cccc}>
        <View style={styles.dddd}>
          <View style={styles.jjjj}>
            <View style={styles.profileBox}></View>
            <View style={styles.active}>
              <Text>Kutloano Jubile</Text>
              <Text>13hrs ago</Text>
            </View>
          </View>
          <Text>...X</Text>
        </View>
        <Text>
          Nnakeng, nka rekela boyfriend eng on his birthday?. E ska feta M193.00 le nne le nnahaneleng hore mme hokanna etsahala hore kelo trikela chelete pele and mme flory a ska smiler ka JUNE hleng.
        </Text>
      </View>

      <View style={styles.three}>
        <TouchableOpacity onPress={incrementLike2} style={styles.likeButton}>
          <SimpleLineIcons name="like" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.likeCount}>{likeCount2}</Text>
        <FontAwesome name="comment-o" size={24} color="black" />
        <Feather name="share-2" size={24} color="black" />
      </View>

      <View style={styles.eeee}>
        <View style={styles.ffff}>
          <View style={styles.llll}>
            <View style={styles.profileBox}></View>
            <View style={styles.active}>
              <Text>Simphiwe Jafeta</Text>
              <Text>2hrs ago</Text>
            </View>
          </View>
          <Text>...X</Text>
        </View>
        <Text>
          Today re tsohile and hare mooding hohang! and le hosane retlo tsoha ntse rese mooding. Danko! 
        </Text>
      </View>

      <View style={styles.four}>
        <TouchableOpacity onPress={incrementLike3} style={styles.likeButton}>
          <SimpleLineIcons name="like" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.likeCount}>{likeCount3}</Text>
        <FontAwesome name="comment-o" size={24} color="black" />
        <Feather name="share-2" size={24} color="black" />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profile: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  profileBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'grey',
  },
  one: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  aaaa: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  bbbb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cccc: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },

  dddd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  two: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  three: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  active: {
    flexDirection: 'column',
  },
  stories: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 50,
  },

  stories: {
    height: 100,
    width: 70,
    borderRadius: 13,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },

  iiii: {
    flexDirection: 'row',
  },

  jjjj: {
    flexDirection: 'row',
  },

  kkkk: {
    flexDirection: 'row',
  },

  llll: {
    flexDirection: 'row',
  },

  four: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  likeButton: {
    marginRight: 10,
  },
  likeCount: {
    marginRight: 5,
  },
  image: {
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
    width: 10,
    height: 10,
    borderRadius: 20,
  },
});

export default Screen;
