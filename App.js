import {Phone, ShieldPlus} from 'phosphor-react-native';
import React, {useState} from 'react';
import {Alert, Modal, Image, Text, Pressable, View, TextInput} from 'react-native';

const App = () => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View className="flex flex-1 justify-center items-center ">
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}>
				<View
					style={{
						flex: 1,
						justifyContent: 'flex-end',
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
					}}>
					<View className="flex  flex-col items-center justify-center bg-white shadow w-full px-[56px] py-[12px]  ">
						<Pressable className="w-[120px] h-[10px] bg-[#E5D8EA] rounded" onPress={() => setModalVisible(!modalVisible)} />
						<View className="flex items-start justify-center  w-full mt-5 mb-2">
							<Text className="text-[18px] font-bold">
								Encontre <Text className="text-[#864293]">Boris</Text> no local de partida
							</Text>
							<Text className="text-sm">Chega em 3 minutos (800 metros)</Text>
						</View>

						<View className="flex  flex-row items-center justify-between gap-[20px] w-full">
							<Image
								source={require('./assets/boris.png')}
								className="flex flex-1"
								style={{
									flex: 1,
									aspectRatio: 1.5,
									resizeMode: 'contain',
								}}
							/>
							<View className="flex flex-col items-start justify-start ">
								<Text className="text-lg font-bold">BCD0D19</Text>
								<Text className="text-xs">Honda Civic Roxo</Text>
							</View>
						</View>

						<View className="flex flex-row items-center justify-center gap-[20px] mb-5 mt-2">
							<TextInput placeholderTextColor="#000" className="flex flex-1 w-full h-[32px]  rounded-full bg-[#F5EDF7] px-4 text-black" placeholder={'Enviar mensagem para Boris...'} />
							<View className="flex flex-row items-center justify-center">
								<Phone size={32} color="#23231f" weight="fill" />
								<ShieldPlus size={32} color="#23231f" weight="fill" />
							</View>
						</View>
					</View>
				</View>
			</Modal>
			<Pressable className={`${modalVisible ? 'hidden' : 'flex'}  items-center justify-center  bg-slate-800 w-1/2 h-20 rounded`} onPress={() => setModalVisible(true)}>
				<Text className="text-white">Abrir Modal Condutor</Text>
			</Pressable>
		</View>
	);
};

export default App;
