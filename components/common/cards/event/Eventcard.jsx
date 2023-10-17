import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./EventCard.style";
import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ event, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(event.employer_logo)
              ? event.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {event?.event_name}
        </Text>

        {/* <Text style={styles.jobType}>{?.job_employment_type}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
