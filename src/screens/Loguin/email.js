import { Text, TextInput, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import Seta from "../../IMG/seta.png";





function Email() {
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <View >
                <View style={styles.Barra} />
                <Image source={Seta} style={styles.IMG} />
                <View style={styles.Bory}>

                    <View>
                        <Text style={styles.corpo}>Insira seu telefone, e email ou usuario</Text>
                    </View>

                    <View>

                        <Text style={{ marginTop: 20, padding: 5 }}>Telefone, e-mail ou usuario</Text>
                        <TextInput style={styles.input} />

                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View style={{ backgroundColor: "#2968c8", borderRadius: 7 }}>
                            <Pressable style={styles.Button}>
                                <Text style={styles.continuar}>Continuar</Text>
                            </Pressable>
                        </View>

                        <View style={{ padding: 15 }}></View>
                        <Pressable style={styles.Button}  >
                            <Text style={styles.resto}>Criar conta</Text>
                        </Pressable>

                        <View style={{ padding: 20 }}></View>
                        <Pressable style={styles.Button} >
                            <Text style={styles.resto}>Preciso de ajuda para entrar</Text>
                        </Pressable>

                    </View>

                </View>

                <View style={styles.footer}>
                    <Text style={styles.textfooter}>Como cuidamos da sua privacidade</Text>
                    <Text>Copyright © 1999-2022 Ebazar.com.br LTDA.</Text>
                </View>

            </View>
        </View>
    )

};
export default Email;