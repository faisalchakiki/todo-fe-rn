import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../features/modal/modalSlice";
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Logo from "../Logo";
import { Silang } from "../../../assets";
import { colors, responsiveHeight, responsiveWidth } from "../../../utils";
import Modal from "react-native-modal"
import { editData, fetchListTodo, postData } from "../../../features/todos/todoSlice";


const BoxModal = () => {
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");
  // console.log(category, description)
  const type = useSelector(state => state.modal.type)
  const isVisible = useSelector(state => state.modal.isVisible)
  const loading = useSelector((state) => state.todos.isLoading);
  const data = useSelector((state) => state.todos.detail?.results);
  const dispatch = useDispatch()

  const toggleModal = () => {
    dispatch(toggle(!isVisible));
  };

  const saveTodo = () => {
    if (category === false || description === false) {
      Alert('fail add todo')
      return false
    } else {
      const data = [{
        "category": category,
        "description": description
      }]
      dispatch(postData(data));
      dispatch(fetchListTodo());

    }
    setCategory('');
    setDescription('');
    toggleModal()
  };

  const editTodo = () => {
    if (category === '' || description === '') {
      Alert('fail add todo')
      return false
    } else {
      const payload = {
        "category": category,
        "description": description
      }

      dispatch(editData({ id: data.id, payload }));
      dispatch(fetchListTodo());
    }
    setCategory('');
    setDescription('');
    toggleModal()
  };

  useEffect(() => {
    if (type === "edit") {
      setCategory(data?.category)
      setDescription(data?.description)
    } else {
      setCategory("")
      setDescription("")
    }
  }, [data, type])

  return (
    <View style={styles.container}>
      <Modal isVisible={isVisible}>
        <View style={styles.modalContainer} >
          {loading ? <Text>Loading...</Text> :
            <>
              <View style={styles.flex}>
                <Logo color='black' size={14} />
                <Pressable onPress={toggleModal} >
                  <Silang />
                </Pressable>
              </View>
              {type === "add" ?
                <>
                  <TextInput value={category} onChangeText={(e) => setCategory(e)} style={styles.input} placeholder='write category' placeholderTextColor={"black"} />
                  <TextInput value={description} onChangeText={(e) => setDescription(e)} style={styles.input} multiline={true} placeholder='write description' placeholderTextColor={"black"} />
                  <Pressable onPress={saveTodo} style={styles.button}>
                    <Text style={styles.buttonText}>{loading ? 'Creating...' : 'Create Todo'}</Text>
                  </Pressable>
                </> :
                <>
                  <TextInput value={category} onChangeText={(e) => setCategory(e)} style={styles.input} placeholder='write category' placeholderTextColor={"black"} />
                  <TextInput value={description} onChangeText={(e) => setDescription(e)} style={styles.input} multiline={true} placeholder='write description' placeholderTextColor={"black"} />
                  <Pressable onPress={editTodo} style={styles.button}>
                    <Text style={styles.buttonText}>{loading ? 'Editing...' : 'Edit Todo'}</Text>
                  </Pressable>
                </>
              }
            </>
          }

        </View>
      </Modal>
    </View>
  )
}

export default BoxModal


const styles = StyleSheet.create({
  modalContainer: {
    marginHorizontal: responsiveWidth(20),
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(20),
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
    height: responsiveHeight(300),
  },
  flex: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: responsiveHeight(25),
  },
  input: {
    borderColor: colors.secondary,
    borderBottomWidth: 1.5,
    marginBottom: responsiveHeight(15),
    paddingLeft: responsiveWidth(5),
    fontSize: 15,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.green,
    padding: 8,
    marginTop: responsiveHeight(10),
    borderRadius: 5,
    marginBottom: responsiveHeight(10),
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  }
})