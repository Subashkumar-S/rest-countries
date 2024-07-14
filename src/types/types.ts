export interface Country {
    name: {
        common: string;
        official?: string;
    };
    region: string;
    subregion?: string;
    tld?: string[];
    currencies?: { [code: string]: { name: string; symbol: string } };
    languages?: { [code: string]: string };
    flags: {
        png: string;
    };
    population: number;
    capital: string;
    cca3: string;
    borders: string;
};
