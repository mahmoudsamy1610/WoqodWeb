import { fakerEN } from '@faker-js/faker';

class DataFaker {

    static FakeName() {
        return fakerEN.person.fullName();
    }

    static FakeEmail() {
        return fakerEN.internet.email();
    }

    static FakeMobileNumber() {
        // Generates a random mobile number in international format
        return fakerEN.phone.number({ style: 'international' }) // '+15551234567'

    }

    static FakeCompanyName() {
        return fakerEN.company.name();
    }

    static FakeComment() {
        return fakerEN.word.words(13);
    }

    


}

export default DataFaker;


