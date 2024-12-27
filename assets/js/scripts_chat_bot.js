document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;  // Avoid sending empty messages

    // Display user's message
    appendMessage(userInput, 'user-message');

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Simulate chatbot response
    setTimeout(() => {
        appendMessage(getChatbotResponse(userInput), 'bot-message');
    }, 1000);
}

function appendMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', type);
    messageElement.innerHTML = `<p>${message}</p>`;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function getChatbotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Réponse concernant l'assurance crédit
    if (lowerCaseMessage.includes('assurance crédit') || lowerCaseMessage.includes('crédit')) {
        return 'L’assurance crédit protège l’emprunteur contre les risques d’incapacité à rembourser un crédit. En quoi puis-je vous aider davantage ?';
    }

    // Réponse concernant les primes
    if (lowerCaseMessage.includes('prime') || lowerCaseMessage.includes('coût') || lowerCaseMessage.includes('tarif')) {
        return 'Le coût de l’assurance dépend de plusieurs facteurs comme l’âge, le montant assuré, le type de contrat, et votre profil de risque. Voulez-vous obtenir un devis ?';
    }

    // Réponse concernant les types d'assurances
    if (lowerCaseMessage.includes('type d\'assurance') || lowerCaseMessage.includes('quels types d\'assurances') || lowerCaseMessage.includes('types d\'assurances')) {
        return 'Nous proposons plusieurs types d’assurances : santé, vie, automobile, habitation et assurance crédit. De quel type d’assurance souhaitez-vous en savoir plus ?';
    }

    // Réponse concernant l'assurance santé
    if (lowerCaseMessage.includes('assurance santé') || lowerCaseMessage.includes('santé')) {
        return 'L’assurance santé couvre vos frais médicaux, hospitalisation, et parfois les soins dentaires et optiques. Voulez-vous connaître les garanties de notre assurance santé ?';
    }

    // Réponse concernant l'assurance vie
    if (lowerCaseMessage.includes('assurance vie') || lowerCaseMessage.includes('vie')) {
        return 'L’assurance vie protège vos proches en cas de décès en leur versant un capital ou une rente. Vous pouvez aussi souscrire à une assurance vie pour épargner à long terme.';
    }

    // Réponse concernant l'assurance automobile
    if (lowerCaseMessage.includes('assurance automobile') || lowerCaseMessage.includes('voiture') || lowerCaseMessage.includes('auto')) {
        return 'L’assurance automobile est obligatoire et couvre les dommages causés à autrui, ainsi que ceux que vous pourriez causer à votre propre véhicule. Souhaitez-vous obtenir un devis pour votre voiture ?';
    }

    // Réponse concernant l'assurance habitation
    if (lowerCaseMessage.includes('assurance habitation') || lowerCaseMessage.includes('logement') || lowerCaseMessage.includes('maison')) {
        return 'L’assurance habitation protège votre logement contre les risques comme l’incendie, les dégâts des eaux, et les cambriolages. Voulez-vous en savoir plus sur nos offres ?';
    }

    // Réponse concernant les bénéficiaires d'une assurance vie
    if (lowerCaseMessage.includes('bénéficiaire') || lowerCaseMessage.includes('bénéficiaires')) {
        return 'Les bénéficiaires sont les personnes désignées pour recevoir les fonds en cas de décès dans une assurance vie. Vous pouvez désigner plusieurs bénéficiaires. Avez-vous besoin d’aide pour en choisir ?';
    }

    // Réponse concernant la déclaration d'un sinistre
    if (lowerCaseMessage.includes('sinistre') || lowerCaseMessage.includes('déclaration sinistre') || lowerCaseMessage.includes('accident')) {
        return 'En cas de sinistre, vous devez le déclarer dans les plus brefs délais, soit en ligne, soit en appelant notre service client. Vous souhaitez déclarer un sinistre ?';
    }

    // Réponse concernant les remboursements
    if (lowerCaseMessage.includes('remboursement') || lowerCaseMessage.includes('rembourser') || lowerCaseMessage.includes('remboursement frais')) {
        return 'Le remboursement des frais dépend de la garantie souscrite et de votre situation. Si vous avez déjà souscrit, vous pouvez vérifier votre statut de remboursement dans votre espace client.';
    }

    // Réponse concernant la gestion de la police d'assurance
    if (lowerCaseMessage.includes('modification') || lowerCaseMessage.includes('changer') || lowerCaseMessage.includes('police') || lowerCaseMessage.includes('contrat')) {
        return 'Vous pouvez modifier votre police d’assurance ou mettre à jour vos informations personnelles en ligne, ou en nous contactant. Souhaitez-vous procéder à une modification de contrat ?';
    }

    // Réponse concernant la résiliation de l'assurance
    if (lowerCaseMessage.includes('résilier') || lowerCaseMessage.includes('annuler') || lowerCaseMessage.includes('arrêter assurance')) {
        return 'La résiliation de votre contrat d’assurance est possible sous certaines conditions. Vous pouvez la faire en ligne ou en nous contactant directement. Voulez-vous connaître les étapes pour résilier ?';
    }

    // Réponse concernant les documents d'assurance
    if (lowerCaseMessage.includes('document') || lowerCaseMessage.includes('contrat') || lowerCaseMessage.includes('attestation')) {
        return 'Les documents d’assurance, comme les attestations et les contrats, peuvent être téléchargés directement depuis votre espace client. Vous avez besoin d’aide pour accéder à vos documents ?';
    }

    // Réponse concernant les modalités de paiement
    if (lowerCaseMessage.includes('paiement') || lowerCaseMessage.includes('payer') || lowerCaseMessage.includes('facture')) {
        return 'Vous pouvez régler vos primes d’assurance de différentes manières : par carte bancaire, prélèvement automatique, ou virement. Voulez-vous connaître les modalités de paiement disponibles ?';
    }

    // Réponse concernant les sinistres liés à l'assurance automobile
    if (lowerCaseMessage.includes('accident voiture') || lowerCaseMessage.includes('accident auto')) {
        return 'En cas d’accident automobile, vous devez signaler l’incident dans les 48 heures. Vous pouvez déclarer un sinistre sur notre site web ou appeler notre service. Avez-vous besoin d’assistance pour déclarer un sinistre automobile ?';
    }

    // Réponse concernant la couverture des sinistres
    if (lowerCaseMessage.includes('couverture sinistre') || lowerCaseMessage.includes('dommages')) {
        return 'La couverture d’un sinistre dépend de la nature du contrat que vous avez souscrit. Pour des informations plus spécifiques, il est préférable de consulter votre contrat d’assurance. Vous souhaitez vérifier votre couverture ?';
    }

    // Réponse concernant ARSA
    if (lowerCaseMessage.includes('ARSA') || lowerCaseMessage.includes('arsa')) {
        return 'Votre Partenaire de Confiance pour votre Protection et votre Sécurité. Bienvenue sur le site officiel de la compagnie dassurances ARSA, acteur majeur dans le secteur de lassurance';
    }

    // Réponse par défaut en cas de question non comprise
    return 'Désolé, je n\'ai pas compris votre question. Pouvez-vous reformuler ou préciser davantage ?';
}


document.getElementById('close-btn').addEventListener('click', function() {
    document.querySelector('.chat-container').style.display = 'none';
});
