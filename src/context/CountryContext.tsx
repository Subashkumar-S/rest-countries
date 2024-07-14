"use client";
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import axios from 'axios';

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  population: number;
  region: string;
}

interface CountryContextType {
    countries: Country[];
    filteredCountries: Country[];
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    selectedRegion: string;
    setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
  }

const CountryContext = createContext<CountryContextType | undefined>(undefined);

interface CountryProviderProps {
  children: ReactNode;
}

export const CountryProvider = ({ children }: CountryProviderProps) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let filteredList = countries;

    if (searchQuery) {
      filteredList = filteredList.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRegion !== 'All') {
      filteredList = filteredList.filter(country => country.region === selectedRegion);
    }

    setFilteredCountries(filteredList);
  }, [searchQuery, countries, selectedRegion]);

  return (
    <CountryContext.Provider
      value={{ countries, filteredCountries, searchQuery, setSearchQuery, selectedRegion, setSelectedRegion }}
    >
      {children}
    </CountryContext.Provider>
  );
};

// Create a custom hook to use the CountryContext
export const useCountry = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};
