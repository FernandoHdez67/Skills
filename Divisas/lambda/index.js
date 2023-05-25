/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');

const languageStrings = {
  en: {
    translation: {
      WELCOME_MESSAGE: 'Hello, welcome to Fernando Currency Converter. You can ask me to convert the currencies you want, such as pesos to dollars.',
      HELP_MESSAGE: 'I can help you convert any currency. For example, you can ask me to convert dollars to pesos.',
      GOODBYE_MESSAGE: 'See you soon, have a nice day!',
      CONVERT_PESO_EURO: 'The conversion of %s pesos is equal to %s euros.',
      CONVERT_EURO_DOLAR: 'The conversion of %s euros is equal to %s dollars.',
      CONVERT_PESO_DOLAR: 'The conversion of %s pesos is equal to %s dollars.',
      CONVERT_DOLAR_PESO: 'The conversion of %s dollars is equal to %s pesos.',
      CONVERT_EURO_PESO: 'The conversion of %s euros is equal to %s pesos.',
      CONVERT_DOLAR_EURO: 'The conversion of %s dollars is equal to %s euros.',
    }
  },
  es:{
    translation: {
      WELCOME_MESSAGE: 'Hola, bienvenido a Conversor de divisas de Fernando. Puedes pedirme que convierta las divisas que desees, como por ejemplo pesos a dolares',
      HELP_MESSAGE: 'Puedo aydarte a convertir cualquier divisa. Por ejemplo Puedes pedirme que convierta dolares a pesos',
      GOODBYE_MESSAGE: 'Hasta pronto, que tengas un buen día!',
      CONVERT_PESO_EURO: 'La conversion de %s pesos equivale a %s euros.',
      CONVERT_EURO_DOLAR: 'La conversion de %s euros equivale a %s dolares.',
      CONVERT_PESO_DOLAR: 'La conversion de %s pesos equivale a %s dolares.',
      CONVERT_DOLAR_PESO: 'La conversion de %s dollars equivale a %s pesos.',
      CONVERT_EURO_PESO: 'La conversion de %s euros equivale a %s pesos.',
      CONVERT_DOLAR_EURO: 'La conversion de %s dollars equivale a %s euros.',

    }
  }
}

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('WELCOME_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const Convertir_peso_euro_Handler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_peso_euro_Handler';
    },
    handle(handlerInput) {
        const divisa = parseFloat(handlerInput.requestEnvelope.request.intent.slots.divisa.value);

        if (divisa>=1){
            const valor = 0.053;
        const resultado = (divisa*valor).toFixed(2);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('CONVERT_PESO_EURO', divisa, resultado);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
        const speakOutput = 'Ingresa sólo numeros positivos, prueba a decir convertir 5 pesos a euros';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};

const Convertir_peso_dolar_Handler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_peso_dolar_Handler';
    },
    handle(handlerInput) {
        const divisa = parseFloat(handlerInput.requestEnvelope.request.intent.slots.divisa.value);

        if (divisa>=1){
            const valor = 0.057;
        const resultado = (divisa*valor).toFixed(2);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('CONVERT_PESO_DOLAR', divisa, resultado);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
        const speakOutput = 'Ingresa sólo numeros positivos, prueba a decir convertir 100 pesos a dolares';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};

const Convertir_dolar_peso_Handler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_dolar_peso_Handler';
    },
    handle(handlerInput) {
        const divisa = parseFloat(handlerInput.requestEnvelope.request.intent.slots.divisa.value);

        if (divisa>=1){
            const valor = 17.50;
        const resultado = (divisa*valor).toFixed(2);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('CONVERT_DOLAR_PESO', divisa, resultado);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
        const speakOutput = 'Ingresa sólo numeros positivos, prueba a decir convertir 100 dolares a pesos';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};

const Convertir_euro_peso_Handler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_euro_peso_Handler';
    },
    handle(handlerInput) {
        const divisa = parseFloat(handlerInput.requestEnvelope.request.intent.slots.divisa.value);

        if (divisa>=0.0){
            const valor = 18.99;
        const resultado = (divisa*valor).toFixed(2);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('CONVERT_EURO_PESO', divisa, resultado);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
        const speakOutput = 'Ingresa sólo numeros positivos, prueba a decir convertir 100 euros a pesos';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};


const Convertir_euro_dolar_Handler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_euro_dolar_Handler';
    },
    handle(handlerInput) {
        const divisa = parseFloat(handlerInput.requestEnvelope.request.intent.slots.divisa.value);

        if (divisa>=1){
            const valor = 1.2;
        const resultado = (divisa*valor).toFixed(2);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('CONVERT_EURO_DOLAR', divisa, resultado);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
        const speakOutput = 'Ingresa sólo numeros positivos, prueba a decir convertir 5 euros a dolares';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};

const Convertir_dolar_euro_Handler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Convertir_dolar_euro_Handler';
    },
    handle(handlerInput) {
        const divisa = parseFloat(handlerInput.requestEnvelope.request.intent.slots.divisa.value);

        if (divisa>=1){
            const valor = 0.92;
        const resultado = (divisa*valor).toFixed(2);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('CONVERT_DOLAR_EURO', divisa, resultado);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
        const speakOutput = 'Ingresa sólo numeros positivos, prueba a decir convertir 100 euros a pesos';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};
 

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('HELP_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('GOODBYE_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// This request interceptor will log all incoming requests to this lambda
const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope.request)}`);
    }
};

// This response interceptor will log all outgoing responses of this lambda
const LoggingResponseInterceptor = {
    process(handlerInput, response) {
      console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};

// This request interceptor will bind a translation function 't' to the requestAttributes.
const LocalizationInterceptor = {
  process(handlerInput) {
    const localizationClient = i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      fallbackLng: 'en',
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: languageStrings,
      returnObjects: true
    });

    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function (...args) {
      return localizationClient.t(...args);
    }
  }
}

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        Convertir_peso_euro_Handler,
        Convertir_peso_dolar_Handler,
        Convertir_dolar_peso_Handler,
        Convertir_euro_peso_Handler,
        Convertir_euro_dolar_Handler,
        Convertir_dolar_euro_Handler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalizationInterceptor,
        LoggingRequestInterceptor)
    .addResponseInterceptors(
        LoggingResponseInterceptor)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();