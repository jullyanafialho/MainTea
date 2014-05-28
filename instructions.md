Get started with MainTea
-----------------------------------

Welcome to Node JS Web Starter application that uses the IBM DataCache REST interface!

This sample application demonstrates how to write a Node JS application using IBM DataCache REST interface and deploy it on BlueMix.

1. [Install the cf command-line tool](https://www.ng.bluemix.net/docs/redirect.jsp?name=cf-instructions).
2. [Download the starter application package](https://ace.ng.bluemix.net:443/rest/../rest/apps/43fe17ea-429b-4368-ab37-20132d115d01/starter-download)
3. Extract the package and cd to it.
4. Connect to BlueMix:

		cf api https://api.ng.bluemix.net

5. Log into BlueMix:

		cf login -u jullyanafialho92@gmail.com
		cf target -o jullyanafialho92@gmail.com -s dev
		
6. Deploy your app:

		cf push MainTea

7. Access your app: [http://MainTea.ng.bluemix.net](http://MainTea.ng.bluemix.net)
