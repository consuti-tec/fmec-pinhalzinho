import React from "react";
import { Text, View } from "react-native"; // Importe o componente View aqui

import {
    Bottom,
    BottomItem,
    BottomItemParent,
    BottomItemParentContainer,
    ContainerBottomItem,
    HideBottomBar,
    Icon,
    Label
} from "./styles";

class BottomBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showBar: true
        }
    }

    hideShow(){
        this.setState({
            showBar: !this.state.showBar,
        });
    }

    render() {
        const { active, navigation } = this.props
        return (
            <Bottom
                active={this.state.showBar}>
                <HideBottomBar>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        {!this.state.showBar &&
                            <Text style={[styles.text, { color: '#1A2450', marginRight: 10 }]}>Mais opções...</Text>
                        }
                        <Icon
                            onPress={() => this.hideShow()}
                            style={{ fontSize: 37 }}
                            name={this.state.showBar ? "menu-down" : "menu-up"} active={active === "Portal2"} />
                    </View>
                </HideBottomBar>
                {this.state.showBar &&
                    <BottomItemParentContainer
                        active={this.state.showBar}>
                        <BottomItemParent
                            active={active === "Portal" || active === "Painel"}
                        >
                            <Label
                                active={active === "Portal" || active === "Painel"}>MultiSports</Label>
                            <ContainerBottomItem>
                                <BottomItem
                                    active={active === "Portal"}
                                    onPress={() => navigation.navigate("Portal")}
                                >
                                    <Icon name="newspaper-variant-outline" active={active === "Portal"} />
                                    <Label active={active === "Portal"}>Notícias</Label>
                                </BottomItem>
                                <BottomItem
                                    active={active === "Painel"}
                                    onPress={() => navigation.navigate("Painel")}
                                >
                                    <Icon name="briefcase-check-outline" active={active === "Painel"} />
                                    <Label active={active === "Painel"}>Gestão</Label>
                                </BottomItem>
                            </ContainerBottomItem>
                        </BottomItemParent>

                        <BottomItemParent
                            active={active === "Portal2" || active === "Painel2"}
                        >
                            <Label active={active === "Portal2" || active === "Painel2"}>Schools</Label>
                            <ContainerBottomItem>
                                <BottomItem
                                    active={active === "Portal2"}
                                    onPress={() => navigation.navigate("Portal2")}
                                >
                                    <Icon name="web" active={active === "Portal2"} />
                                    <Label active={active === "Portal2"}>Escola</Label>
                                </BottomItem>
                                <BottomItem
                                    active={active === "Painel2"}
                                    onPress={() => navigation.navigate("Painel2")}
                                >
                                    <Icon name="view-dashboard-outline" active={active === "Painel2"} />
                                    <Label active={active === "Painel2"}>Painel</Label>
                                </BottomItem>
                            </ContainerBottomItem>
                        </BottomItemParent>

                    </BottomItemParentContainer>
                }
            </Bottom>
        );
    }
}

const styles = {
    text: {
        fontSize: 16,
    }
};

export default BottomBar;
