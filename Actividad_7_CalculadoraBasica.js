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
     WELCOME_MESSAGE:'Welcome to Fernando Calculator, You can ask me to add, subtract, multiply or divide 2 numbers, for example, ask me to add five plus three',
      HELP_MESSAGE:'Hello, I can help you with the addition, subtraction, multiplication or division of two numbers, just try saying add five plus seven',
      GOODBYE_MESSAGE:'See you soon, have a nice day!',
      FALLBACK_MESSAGE:'Sorry, I dont know anything about that. Please try again.',
      ERROR_MESSAGE:'Sorry, there was a problem. Please try again.',
      DivirCero: 'Sorry, it is not possible to divide by zero.',
      OPERACION_SUMA:'%s plus %s is %s',
      OPERACION_RESTA:'%s minus %s is %s',
      OPERACION_MULTI:'%s by %s is %s',
      OPERACION_DIVISION:'%s by %s is %s'
    }
  },
  
  es:{
    translation: {
      WELCOME_MESSAGE:'Bienvenido a Calculadora de Fernando, Puedes pedirme que sume, reste, multiplique o divida 2 numeros, por ejemplo pide sumar cinco mas tres',
      HELP_MESSAGE:'Hola, puedo ayudarte con la suma, resta, multiplicación o división de dos numeros, solo prueba diciendo suma cinco mas siete',
      GOODBYE_MESSAGE:'Hasta pronto, que tengas un buen día!',
      FALLBACK_MESSAGE:'Lo siento, no se nada sobre eso. Por favor inténtalo de nuevo.',
      ERROR_MESSAGE: 'Lo siento, ha habido un problema. Por favor inténtalo de nuevo.',
      DivirCero: 'Lo siento, no es posible dividir entre cero.',
      OPERACION_SUMA:'%s mas %s es %s',
      OPERACION_RESTA:'%s menos %s es %s',
      OPERACION_MULTI:'%s por %s es %s',
      OPERACION_DIVISION:'%s entre %s es %s'
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

const  Calcular_Suma = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Calcular_Suma';
    },
    handle(handlerInput){
        const num_uno = parseFloat(handlerInput.requestEnvelope.request.intent.slots.num_uno.value);
        const num_dos = parseFloat(handlerInput.requestEnvelope.request.intent.slots.num_dos.value);

        const resultado = num_uno + num_dos;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('OPERACION_SUMA', num_uno, num_dos, resultado);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const  Calcular_Resta = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Calcular_Resta';
    },
    handle(handlerInput){
        const num_uno = parseFloat(handlerInput.requestEnvelope.request.intent.slots.num_uno.value);
        const num_dos = parseFloat(handlerInput.requestEnvelope.request.intent.slots.num_dos.value);
        
        const resultado = num_uno - num_dos;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('OPERACION_RESTA', num_uno, num_dos, resultado);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const  Calcular_Multi = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Calcular_Multi';
    },
    handle(handlerInput){
        const num_uno = parseFloat(handlerInput.requestEnvelope.request.intent.slots.num_uno.value);
        const num_dos = parseFloat(handlerInput.requestEnvelope.request.intent.slots.num_dos.value);
        
        const resultado = num_uno * num_dos;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('OPERACION_MULTI', num_uno, num_dos, resultado);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const  Calcular_Division = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Calcular_Division';
    },
    handle(handlerInput){
        const num_uno = parseFloat(handlerInput.requestEnvelope.request.intent.slots.num_uno.value);
        const num_dos = parseFloat(handlerInput.requestEnvelope.request.intent.slots.num_dos.value);
        
        if (num_dos === 0){
            const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
             const speakOutput = requestAttributes.t('DivirCero');
             return handlerInput.responseBuilder
             .speak(speakOutput)
             .getResponse();
        }
        const resultado = num_uno / num_dos;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('OPERACION_DIVISION', num_uno, num_dos, resultado);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
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
        Calcular_Suma,
        Calcular_Resta,
        Calcular_Multi,
        Calcular_Division,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(LoggingRequestInterceptor, LocalizationInterceptor)
    .addResponseInterceptors(LoggingResponseInterceptor)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();