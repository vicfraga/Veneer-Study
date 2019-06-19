/* Core */
import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import Publicacoes from "./Publicacoes";
import styles from "./styles";
import Icons from "react-native-vector-icons/Ionicons";

export default class PostList extends Component {
  state = {
    modo: false,
    publicacoes: [
      {
        id: 1,
        image:
          "https://66.media.tumblr.com/73aae9a13d4556076f62348dea73ad61/tumblr_otg94tBdJZ1wvss5mo2_250.png"
      },
      {
        id: 2,
        image: "https://data.whicdn.com/images/293666380/large.jpg"
      },
      {
        id: 3,
        image:
          "https://i.pinimg.com/originals/23/20/1c/23201c4acea33fa16f2c25a564359c60.jpg"
      },
      {
        id: 4,
        image:
          "https://gq-images.condecdn.net/image/eYxRKZdZEXn/crop/1020/f/Tom-Holland-02-GQ-1Jun17_b.jpg"
      },
      {
        id: 5,
        image:
          "https://pbs.twimg.com/media/DDlmRQJWAAAuf7A.jpg"
      },
      {
        id: 6,
        image:
          "https://i.pinimg.com/originals/86/18/d2/8618d2a5ec9da216367e351864527f92.jpg"
      }, 
      {
        id: 7,
        image:
          "https://www.thefashionisto.com/wp-content/uploads/2017/08/Tom-Holland-2017-The-Rake-Turkey-Photo-Shoot-001.jpg"
      },
      {
        id: 8,
        image:
          "https://gq-images.condecdn.net/image/OAjjxdV1NBY/crop/1020/f/SHOT_6_067_02_CMYK-gq-28jun17-carter-smith_b.jpg"
      },
      {
        id: 9,
        image:
          "http://pm1.narvii.com/7174/f572c15c33247eaf35c0bbfd29c1730414cac0d8r1-968-645v2_uhq.jpg"
      },
    ]
  };

  render() {
    return (
      <View style={styles.containerBG}>
        <View style={styles.containerIcons}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ modo: false });
            }}
          >
            <Icons name="ios-grid" size={30} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({ modo: true });
            }}
          > 
            <Icons name="ios-albums" size={30} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          {this.state.publicacoes.map(publicacao => (
            <Publicacoes key={publicacao.id} publicacao={publicacao} modo={this.state.modo} />
          ))}
        </View>
      </View>
    );
  }
}
