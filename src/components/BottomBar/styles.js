import styled from "styled-components/native";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppConfig from "../../AppConfig";

export const Bottom = styled.View`
  height: ${(props) => (props.active ? "115px" : "35px")};
  background: #dbdbdb;
  justify-content: space-between;
  flex-direction: column;
`;

export const BottomItemParentContainer = styled.View`
  height: 90px;
  background: #ffffff;
  justify-content: space-between;
  flex-direction: row;
`

export const HideBottomBar  = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
})`
  width: 100%;
  align-self: flex-end;
  text-align: right;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 25px;
`;

export const BottomItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
})`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 50%;
  height: 50px;
  background: ${(props) => (props.active ? "#f0f0f0" : "#dbdbdb")};
  border-top-width: 0px;
  border-color: ${(props) => (props.active ? AppConfig.ColorTheme : "#f7f7f7")};
`;

export const ContainerBottomItem  = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
})`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BottomItemParent = styled.SafeAreaView`
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 50%;
  background: ${(props) => (props.active ? "#dbdbdb" : "#dbdbdb")};
  border-top-width: 4px;
  border-color: ${(props) => (props.active ? AppConfig.ColorTheme : "#dbdbdb")};
`;

export const Icon = styled(MaterialIcons).attrs({
  size: 20,
})`
  color: ${(props) => (props.active ? AppConfig.ColorTheme : "rgba(0,0,0,.4)")};
  margin-right: 10px;
`;


export const Label = styled.Text`
  color: ${(props) => (props.active ? AppConfig.ColorTheme : "rgba(0,0,0,.4)")};
  font-weight: ${(props) => (props.active ? "bold" : "500")};
  font-size: 15px;
`;
