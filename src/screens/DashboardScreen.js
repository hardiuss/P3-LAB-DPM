import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import RoundedCard from '../components/RoundedCard';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Beranda Hardius Pratama</Text>
        <RoundedCard 
          title="Selamat Datang!" 
          description="Ini adalah dasbor Anda dengan kartu berwarna."
        />
        <RoundedCard 
          title="Statistik Anda"
          description="Periksa statistik dan kemajuan terbaru Anda."
        />
        <RoundedCard 
          title="Notifikasi"
          description="Tetap diperbarui dengan berita terbaru."
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Light background
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default DashboardScreen;
