import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";

import GPS from "../../IMG/GPS.png"
import menu from "../../IMG/menu.png"
import carrinho from "../../IMG/carrinho.png"
import banner from "../../IMG/banner.png"
import caminhao from "../../IMG/caminhao.png";
import phone from "../../IMG/icone1.png"
import cesta from "../../IMG/cesta.png"
import oferta from "../../IMG/oferta.png"
import carro from "../../IMG/carro.png"
import mais from "../../IMG/mais.png"
import banner2 from "../../IMG/banner2.png"
import anuncio from "../../IMG/anuncio.png"
import styles from "./styles";


export default function Inicial() {
    return (
        <View style={{ alignContent: "center", flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.box}>
                    <Image source={menu} style={styles.menuCarrinho} />
                </TouchableOpacity>


                <TextInput style={styles.clicavel} />

                <TouchableOpacity style={styles.box}>
                    <Image source={carrinho} style={styles.menuCarrinho} />
                </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', backgroundColor: "#fff159", alignItems: "center" }}>
                <Image source={GPS} style={styles.IMG} />
                <Text>Bem vindo Usuario desconhecido: Endereco</Text>
            </View>

            <ScrollView>
                <View style={{ padding: 2, margin: 2 }}>
                    <Image source={banner} style={styles.baner} />
                </View>

                <View style={styles.conteudo}>

                    <View style={styles.BOXroxo} >
                        <Text style={{ color: "white" }}>   Assine o nivel 6 por R$9,90/mes                                           <Text style={{ alignItems: "flex-end" }}> > </Text>
                        </Text>
                    </View>

                    <View style={styles.BOX3}>

                        <View style={{ flexDirection: "row", }}>
                            <Image source={caminhao} style={{ width: 18, height: 18, tintColor: "green" }} />
                            <Text style={{ color: "green", fontSize: 13, marginHorizontal: 10 }}>Frete gratis</Text>
                            <Text style={{ color: "black" }}>em milhoes de produtos </Text>
                        </View>

                    </View>

                    <View style={styles.iconestags}>
                        <TouchableOpacity style={styles.icos} >
                            <Image source={phone} style={styles.imgico}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icos}>
                            <Image source={oferta} style={styles.imgico}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icos} >
                            <Image source={cesta} style={styles.imgico}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icos}>
                            <Image source={carro} style={styles.imgico}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icos}>
                            <Image source={mais} style={styles.imgico}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.iconestags}>
                        <Text style={styles.textoIcos}>Recarga</Text>
                        <Text style={styles.textoIcos}>Oferta</Text>
                        <Text style={styles.textoIcos}>Mercado</Text>
                        <Text style={styles.textoIcos}>Vaiculo</Text>
                        <Text style={styles.textoIcos}>Ver mais</Text>
                    </View>

                    <View style={styles.banner2}>
                        <View>
                            <Image source={banner2} style={styles.img2} />
                        </View>
                    </View>

                    <View style={styles.containerr}>
                        <View style={styles.BOX4}>
                            <View style={{width:"100%",borderBottomWidth:1,borderColor:"#303030"}}>
                                <View>
                                    <Text style={{ fontSize: 25, color: "black", padding: 10, marginLeft: 10 }}>Visto recentemente</Text>
                                </View>
                                
                            </View>
                            <Image source={anuncio} style={styles.anuncio} />
                        </View>
                    </View>
                </View>
            </ScrollView>


        </View>
    )
}
