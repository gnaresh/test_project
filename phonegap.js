function Phonegap_Login(url_S,state) 
	{
	 var url_go = "https://www.facebook.com/dialog/oauth?client_id="+FB_Properties["App ID"]+"&auth_type=rerequest&scope="+FB_API["scope"]+"&state="+state+"&response_type=token&redirect_uri="+url_S;
	 
	 console.log("ACTS -- (Phonegap_Login) Started Phonegap Login");
	 ios_url = window.open(url_go, '_blank', 'location=no,toolbar=no');
	 ios_url.addEventListener('loadstart', function(e)
         { var url = e.url;
	  var fburl = url.indexOf("facebook.com/login");
          var err = url.indexOf("error");
	  if (err >= 0 && fburl < 0)
          {ios_url.close();
	   FB_API["API Error Code"] = "Actions";
           FB_API["API Error Message"] = url;
           FB_API["API Error Type"] = "Phonegap_Login";
	   FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.Con_Phonegap_Login_Fail, FB_API["Instance"]);
	   FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.Con_Login_Error, FB_API["Instance"]);
	   console.log("ACTS -- (Phonegap_Login) Error Phonegap Login");
          }
          var n = url.indexOf("#access_token=");
	  if (n >= 1)
	  {
           var tokensplit = url.split("#");
           var token_two = tokensplit[1].split("&");
           var accessToken1 = token_two[0].split("=");
           User["User AccessToken"] = accessToken1[1];
	   Fetch_User("me",User["User AccessToken"],function(FU_Status)
	   {if (FU_Status == "success") {FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.CON_USER_SUCCESS, FB_API["Instance"]);ios_url.close();}
	    else{FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.CON_USER_FAIL, FB_API["Instance"]);ios_url.close();}
	   });
            
	    
	    FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.Con_Phonegap_Login, FB_API["Instance"]);
            console.log("ACTS -- (Phonegap_Login) Finished Phonegap Login");
          }});
	};