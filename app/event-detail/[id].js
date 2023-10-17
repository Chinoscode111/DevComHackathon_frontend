import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { JobFooter,  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  NearbyJobCard} from "../../components";

import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import { event } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";



const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  const isLoading = false;
  const error = false;
  const globalData =
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
  // const { data, isLoading, error, refetch } = useFetch("job-details", {
  //   job_id: params.id,
  // });
    const data = {
      "event_name": "Late-Night Chat",
      "event_id": 17,
      "event_time": "10:00 PM",
      "event_location": "Common Room"
    }
  // const [activeTab, setActiveTab] = useState(tabs[0]);
   const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false)
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {/* {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : ( */}
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                <TouchableOpacity>
                  <Text>{`NAME : ${data.event_name}`}</Text>
                  <Text>{`LOCATION : ${data.event_location}`}</Text>
                  <Text>{`TIME : ${data.event_time}`}</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>

        <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
