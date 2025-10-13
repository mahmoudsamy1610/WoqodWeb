import { faker } from '@faker-js/faker';

class DataFaker {

    static FakeName() {
        return faker.person.fullName();
    }

    static FakeEmail() {
        return faker.internet.email();
    }

    static FakeMobileNumber() {
        // Generates a random mobile number in international format
        return faker.phone.number({ style: 'international' }) // '+15551234567'

    }

    static FakeCompanyName() {
        return faker.company.name();
    }

    static FakeComment() {
        return faker.lorem.sentence(22);
    }

    


}

export default DataFaker;


