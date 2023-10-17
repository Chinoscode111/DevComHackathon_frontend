import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "../../../components/home/events/eventscss";
import { RegisteredCard } from "../../../components";
const Registeredevents = () => {
  const router = useRouter();
  // const { data, isLoading, error } = useFetch("search", {
  //   query: "React Native developer",
  //   num_pages: "1",
  // });

  const data =
   [
      {
        "event_name": "Guest Talk 1",
        "event_id": 1,
        "event_time": "8:00 AM",
        "event_location": "Tvnce"
      },
      {
        "event_name": "Inauguration",
        "event_id": 2,
        "event_time": "8:00 AM",
        "event_location": "Convo"
      },
      {
        "event_name": "Placement Cell Meeting",
        "event_id": 3,
        "event_time": "9:00 AM",
        "event_location": "LC102"
      },
      {
        "event_name": "Guest Talk 2",
        "event_id": 4,
        "event_time": "10:00 AM",
        "event_location": "Tvnce"
      },
      {
        "event_name": "Seminar",
        "event_id": 5,
        "event_time": "10:30 AM",
        "event_location": "Convo"
      },
      {
        "event_name": "Workshop",
        "event_id": 6,
        "event_time": "11:00 AM",
        "event_location": "LC102"
      },
      {
        "event_name": "Guest Talk 3",
        "event_id": 7,
        "event_time": "12:00 PM",
        "event_location": "Tvnce"
      },
      {
        "event_name": "Conference",
        "event_id": 8,
        "event_time": "1:00 PM",
        "event_location": "Convo"
      },
      {
        "event_name": "Lunch Break",
        "event_id": 9,
        "event_time": "1:30 PM",
        "event_location": "Cafeteria"
      },
      {
        "event_name": "Panel Discussion",
        "event_id": 10,
        "event_time": "2:30 PM",
        "event_location": "LC102"
      },
      {
        "event_name": "Guest Talk 4",
        "event_id": 11,
        "event_time": "3:00 PM",
        "event_location": "Tvnce"
      },
      {
        "event_name": "Networking Event",
        "event_id": 12,
        "event_time": "4:00 PM",
        "event_location": "Convo"
      },
      {
        "event_name": "Closing Ceremony",
        "event_id": 13,
        "event_time": "5:00 PM",
        "event_location": "Auditorium"
      },
      {
        "event_name": "Dinner",
        "event_id": 14,
        "event_time": "7:00 PM",
        "event_location": "Cafeteria"
      },
      {
        "event_name": "Social Mixer",
        "event_id": 15,
        "event_time": "8:00 PM",
        "event_location": "Convo"
      },
      {
        "event_name": "Movie Night",
        "event_id": 16,
        "event_time": "9:00 PM",
        "event_location": "Outdoor Theater"
      },
      {
        "event_name": "Late-Night Chat",
        "event_id": 17,
        "event_time": "10:00 PM",
        "event_location": "Common Room"
      },
      {
        "event_name": "Stargazing",
        "event_id": 18,
        "event_time": "11:00 PM",
        "event_location": "Observatory"
      },
      {
        "event_name": "Campfire Stories",
        "event_id": 19,
        "event_time": "12:00 AM",
        "event_location": "Campfire Area"
      },
      {
        "event_name": "Midnight Snack",
        "event_id": 20,
        "event_time": "1:00 AM",
        "event_location": "Cafeteria"
      }
    ]
  const isLoading = false;
  const error = false;
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Events</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((event) => (
            <RegisteredCard
              event={event}
              key={event.event_id}
              handleNavigate={() => router.push(`/event-detail/${event.event_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Registeredevents;
