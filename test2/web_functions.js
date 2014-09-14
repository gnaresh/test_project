function Fetch_User(userid,user_token,callback)
{console.log("API -- (Fetch_User) Fetch User Started");
var working_url = FB_API["URL GRAPHAPI"]+FB_Properties["Version"]+"/"+userid+"/"+FB_API["URL GRAPH ME FIELDS"]+user_token;
 $.ajax({
  url: working_url,
  dataType: 'jsonp',  //use jsonp data type in order to perform cross domain ajax
  crossDomain: true,
  
  success: function(data)
  {if(data.hasOwnProperty('third_party_id') == false){User["User Third Party ID"] = "None";}else{User["User Third Party ID"] = data.third_party_id;}
   if(data.hasOwnProperty('link') == false){User["User Link"] = "None";}else{User["User Link"] = data.link;}
   if(data.hasOwnProperty('error') == false){FB_API["Error Code"] = "None";}else{FB_API["Error Code"] = data.error.code;}
   if(data.hasOwnProperty('error') == false){FB_API["Error Type"] = "None";}else{FB_API["Error Type"] =data.error.type;}
   if(data.hasOwnProperty('error') == false){FB_API["Error Message"] = "None";}else{FB_API["Error Message"] = data.error.message;}
   if(data.hasOwnProperty('hometown') == false){User["User Hometown Name"] = "None";User["User Hometown ID"] = "None";}
   else
   {
   if(data.hometown.hasOwnProperty('name') == false){User["User Hometown Name"] = "None"}else{User["User Hometown Name"] = data.hometown.name;}
   if(data.hometown.hasOwnProperty('id') == false){User["User Hometown ID"] = "None"}else{User["User Hometown ID"] = data.hometown.id;}
   }
   if(data.hasOwnProperty('religion') == false){User["User Religion"] = "None";}else{User["User Religion"] = data.religion;}
   if(data.hasOwnProperty('age_range') == false){User["User Maximum Age Range"] = "None";User["User Minimum Age Range"] = "None";}
   else
   {
   if(data.age_range.hasOwnProperty('max') == false){User["User Maximum Age Range"] = "None"}else{User["User Maximum Age Range"] = data.age_range.max;}
   if(data.age_range.hasOwnProperty('min') == false){User["User Minimum Age Range"] = "None"}else{User["User Minimum Age Range"] = data.age_range.min;}
   }
   if(data.hasOwnProperty('verified') == false){User["User Verified"] = "None";}else{User["User Verified"] = data.verified;}
   if(data.hasOwnProperty('religion') == false){User["User Religion"] = "None";}else{User["User Religion"] = data.religion;}
   if(data.hasOwnProperty('significant_other') == false){User["User Significant Other Name"] = "None";User["User Significant Other ID"] = "None";}
   else
   {
   if(data.significant_other.hasOwnProperty('name') == false){}else{User["User Significant Other Name"] = data.significant_other.name;}
   if(data.significant_other.hasOwnProperty('id') == false){}else{User["User Significant Other ID"] = data.significant_other.id;}
   }
   if(data.hasOwnProperty('timezone') == false){User["User timezone"] = "None";}else{User["User timezone"] = data.timezone;}
   if(data.hasOwnProperty('relationship_status') == false){User["User Relationship Status"] = "None";}else{User["User Relationship Status"] = data.relationship_status;}
   if(data.hasOwnProperty('quotes') == false){User["User Quotes"] = "None";}else{User["User Quotes"] = data.quotes;}
   if(data.hasOwnProperty('last_name') == false){User["User Last Name"] = "None";}else{User["User Last Name"] = data.last_name;}
   if(data.hasOwnProperty('locale') == false){User["User Locale"] = "None";}else{User["User Locale"] = data.locale;}
   if(data.hasOwnProperty('name') == false){User["User Full Name"] = "None";}else{User["User Full Name"] = data.name;}
   if(data.hasOwnProperty('name_format') == false){User["User Name Format"] = "None";}else{User["User Name Format"] = data.name_format;}
   if(data.hasOwnProperty('political') == false){User["User Political Views"] = "None";}else{User["User Political Views"] = data.political;}
   if(data.hasOwnProperty('installed') == false){User["User App Installed"] = "None";}else{User["User App Installed"] = data.installed;}
   if(data.hasOwnProperty('is_verified') == false){User["User Is Verified"] = "None";}else{User["User Is Verified"] = data.is_verified;}
   if(data.hasOwnProperty('bio') == false){User["User Bio"] = "None";}else{User["User Bio"] = data.bio;}
   if(data.hasOwnProperty('birthday') == false){User["User Birthday"] = "None";}else{User["User Birthday"] = data.birthday;}

   if(data.hasOwnProperty('cover') == false){User["User Cover Photo ID"] = "None";User["User Cover Photo Y Offset"] = "None";User["User Cover Photo URL"] = "None";}
   else
   {
   if(data.cover.hasOwnProperty('offset_y') == false){}else{User["User Cover Photo Y Offset"] = data.cover.offset_y;}
   if(data.cover.hasOwnProperty('name') == false){}else{User["User Cover Photo URL"] = data.cover.source;}
   if(data.cover.hasOwnProperty('id') == false){}else{User["User Cover Photo ID"] = data.cover.id;}
   }
   if(data.hasOwnProperty('currency') == false){User["User Currency"] = "None";User["User Currency US Exchange Rate"] = "None";User["User Currency Offset"] = "None";User["User Currency US Exchange Rate Inverse"] = "None";}
   else
   {
   if(data.currency.hasOwnProperty('currency_offset') == false){}else{User["User Currency Offset"] = data.currency.currency_offset;}
   if(data.currency.hasOwnProperty('usd_exchange_inverse') == false){}else{User["User Currency US Exchange Rate Inverse"] = data.currency.usd_exchange_inverse;}
   if(data.currency.hasOwnProperty('usd_exchange') == false){}else{User["User Currency US Exchange Rate"] = data.currency.usd_exchange;}
   if(data.currency.hasOwnProperty('user_currency') == false){}else{User["User Currency"] = data.currency.user_currency;}
   }
   if(data.hasOwnProperty('about') == false){User["User About Me"] = "None";}else{User["User About Me"] = data.about;}
   if(data.hasOwnProperty('email') == false){User["User Email"] = "None";}else{User["User Email"] = data.email;}
   if(data.hasOwnProperty('first_name') == false){User["User First Name"] = "None";}else{User["User First Name"] = data.first_name;}
   if(data.hasOwnProperty('gender') == false){User["User Gender"] = "None";}else{User["User Gender"] = data.gender;}
   if(data.hasOwnProperty('middle_name') == false){User["User Middle Name"] = "None";}else{User["User Middle Name"] = data.middle_name;}
   jQuery.ajax( {url: 'https://graph.facebook.com/me/picture?redirect=0&type=large&access_token='+user_token, dataType: 'jsonp', crossDomain: true
   , success: function( datapic )
   {User["User Profile Picture"] = datapic.data.url;console.log("API -- (Fetch_User) Fetch User Complete");callback("success");}
   , error: function( datapic ) {
	FB_API["API Error Code"] = "Picture";
        FB_API["API Error Message"] = datapic;
        FB_API["API Error Type"] = "Fetch_User";
	console.log("API -- (Fetch_User) Fetch User Fail(Picture) -error: "+datapic); callback("failure");
	}
             });
	
  },
  error: function(error)
  {
   FB_API["API Error Code"] = "User";
   FB_API["API Error Message"] = error;
   FB_API["API Error Type"] = "Fetch_User"; 	
   console.log("API -- (Fetch_User) Fetch User Fail(User) -error: "+error);callback("failure");
  },
});
 	
}
function User_Reset_Vars()
{console.log("API -- (User_Reset_Vars) Set Variables Started");
User["User ID"] = "Not Available";
User["User About Me"] = "Not Available";
User["User Minimum Age Range"] = "Not Available";
User["User Maximum Age Range"] = "Not Available";
User["User Bio"] = "Not Available";
User["User Birthday"] = "Not Available";
User["User Cover Photo ID"] = "Not Available";
User["User Cover Photo URL"] = "Not Available";
User["User Cover Photo Y Offset"] = "Not Available";
User["User Currency"] = "Not Available";
User["User Currency US Exchange Rate"] = "Not Available";
User["User Currency US Exchange Rate Inverse"] = "Not Available";
User["User Email"] = "Not Available";
User["User First Name"] = "Not Available";
User["User Gender"] = "Not Available";
User["User Hometown ID"] = "Not Available";
User["User Hometown Name"] = "Not Available";
User["User App Installed"] = "Not Available";
User["User Is Verified"] = "Not Available";
User["User Last Name"] = "Not Available";
User["User Link"] = "Not Available";
User["User Locale"] = "Not Available";
User["User Middle Name"] = "Not Available";
User["User Full Name"] = "Not Available";
User["User Name Format"] = "Not Available";
User["User Political Views"] = "Not Available";
User["User Quotes"] = "Not Available";
User["User Relationship Status"] = "Not Available";
User["User Religion"] = "Not Available";
User["User Significant Other ID"] = "Not Available";
User["User Significant Other Name"] = "Not Available";
User["User timezone"] = "Not Available";
User["User Third Party ID"] = "Not Available";
User["User Verified"] = "Not Available";
User["User Website"] = "Not Available";
User["User Favorite Athletes Size"] = 0;
User["User Favorite Athletes Current ID"] = "Not Available";
User["User Favorite Athletes Current Name"] = "Not Available";
User["User Education Size"] = 0;
User["User Education Current Type"] = "Not Available";
User["User Education Current Name"] = "Not Available";
User["User Education Current ID"] = "Not Available";
User["User Devices Size"] = 0;
User["User Devices Current Hardware"] = "Not Available";
User["User Devices Current OS"] = "Not Available";
User["User AccessToken"] = "Not Available";
User["User AccessToken Expires"] = "Not Available";
User["User Login Status"] = "Not Available";
FB_API["API Error Code"] = "None";
FB_API["API Error Message"] = "None";
FB_API["API Error Type"] = "None";
User["User Currency Offset"] = "Not Available";
User["User Picture Profile"] = "Not Available";
User["User Granted Permissions"] ="Not Available"
console.log("API -- (User_Reset_Vars) Set Variables Finished");
}
function Web_Language_Set(languages)
{console.log("API -- (Web_Language_Set) Begin Setting Language");
	   var assigned = languages;
	   if (assigned == 0) { FB_Properties["Language"] = "zh_TW";}
	   else if (assigned == 1) { FB_Properties["Language"] = "zh_HK";}
	   else if (assigned == 2) { FB_Properties["Language"] = "zh_CN";}
	   else if (assigned == 3) { FB_Properties["Language"] = "vi_VN";}
	   else if (assigned == 4) { FB_Properties["Language"] = "ur_PK";}
	   else if (assigned == 5) { FB_Properties["Language"] = "uk_UA";}
	   else if (assigned == 6) { FB_Properties["Language"] = "tr_TR";}
	   else if (assigned == 7) { FB_Properties["Language"] = "tl_PH";}
	   else if (assigned == 8) { FB_Properties["Language"] = "th_TH";}
	   else if (assigned == 9) { FB_Properties["Language"] = "te_IN";}
	   else if (assigned == 10) { FB_Properties["Language"] = "ta_IN";}
	   else if (assigned == 11) { FB_Properties["Language"] = "sw_KE";}
	   else if (assigned == 12) { FB_Properties["Language"] = "sv_SE";}
	   else if (assigned == 13) { FB_Properties["Language"] = "sr_RS";}
	   else if (assigned == 14) { FB_Properties["Language"] = "sq_AL";}
	   else if (assigned == 15) { FB_Properties["Language"] = "sl_SI";}
	   else if (assigned == 16) { FB_Properties["Language"] = "sk_SK";}
	   else if (assigned == 17) { FB_Properties["Language"] = "si_LK";}
	   else if (assigned == 18) { FB_Properties["Language"] = "ru_RU";}
	   else if (assigned == 19) { FB_Properties["Language"] = "ro_RO";}
	   else if (assigned == 20) { FB_Properties["Language"] = "pt_PT";}
	   else if (assigned == 21) { FB_Properties["Language"] = "pt_BR";}
	   else if (assigned == 22) { FB_Properties["Language"] = "ps_AF";}
	   else if (assigned == 23) { FB_Properties["Language"] = "pl_PL";}
	   else if (assigned == 24) { FB_Properties["Language"] = "pa_IN";}
	   else if (assigned == 25) { FB_Properties["Language"] = "nn_NO";}
	   else if (assigned == 26) { FB_Properties["Language"] = "nl_NL";}
	   else if (assigned == 27) { FB_Properties["Language"] = "ne_NP";}
	   else if (assigned == 28) { FB_Properties["Language"] = "nb_NO";}
	   else if (assigned == 29) { FB_Properties["Language"] = "ms_MY";}
	   else if (assigned == 30) { FB_Properties["Language"] = "ml_IN";}
	   else if (assigned == 31) { FB_Properties["Language"] = "mk_MK";}
	   else if (assigned == 32) { FB_Properties["Language"] = "lv_LV";}
	   else if (assigned == 33) { FB_Properties["Language"] = "lt_LT";}
	   else if (assigned == 34) { FB_Properties["Language"] = "la_VA";}
	   else if (assigned == 35) { FB_Properties["Language"] = "ku_TR";}
	   else if (assigned == 36) { FB_Properties["Language"] = "ko_KR";}
	   else if (assigned == 37) { FB_Properties["Language"] = "kn_IN";}
	   else if (assigned == 38) { FB_Properties["Language"] = "km_KH";}
	   else if (assigned == 39) { FB_Properties["Language"] = "ka_GE";}
	   else if (assigned == 40) { FB_Properties["Language"] = "jv_ID";}
	   else if (assigned == 41) { FB_Properties["Language"] = "ja_JP";}
	   else if (assigned == 42) { FB_Properties["Language"] = "it_IT";}
	   else if (assigned == 43) { FB_Properties["Language"] = "is_IS";}
	   else if (assigned == 44) { FB_Properties["Language"] = "id_ID";}
	   else if (assigned == 45) { FB_Properties["Language"] = "hy_AM";}
	   else if (assigned == 46) { FB_Properties["Language"] = "hu_HU";}
	   else if (assigned == 47) { FB_Properties["Language"] = "hr_HR";}
	   else if (assigned == 48) { FB_Properties["Language"] = "hi_IN";}
	   else if (assigned == 49) { FB_Properties["Language"] = "he_IL";}
	   else if (assigned == 50) { FB_Properties["Language"] = "gn_PY";}
	   else if (assigned == 51) { FB_Properties["Language"] = "gl_ES";}
	   else if (assigned == 52) { FB_Properties["Language"] = "ga_IE";}
	   else if (assigned == 53) { FB_Properties["Language"] = "fy_NL";}
	   else if (assigned == 54) { FB_Properties["Language"] = "fr_FR";}
	   else if (assigned == 55) { FB_Properties["Language"] = "fr_CA";}
	   else if (assigned == 56) { FB_Properties["Language"] = "fo_FO";}
	   else if (assigned == 57) { FB_Properties["Language"] = "fi_FI";}
	   else if (assigned == 58) { FB_Properties["Language"] = "fb_LT";}
	   else if (assigned == 59) { FB_Properties["Language"] = "fa_IR";}
	   else if (assigned == 60) { FB_Properties["Language"] = "eu_ES";}
	   else if (assigned == 61) { FB_Properties["Language"] = "et_EE";}
	   else if (assigned == 62) { FB_Properties["Language"] = "es_LA";}
	   else if (assigned == 63) { FB_Properties["Language"] = "es_ES";}
	   else if (assigned == 64) { FB_Properties["Language"] = "eo_EO";}
	   else if (assigned == 65) { FB_Properties["Language"] = "en_US";}
	   else if (assigned == 66) { FB_Properties["Language"] = "en_UD";}
	   else if (assigned == 67) { FB_Properties["Language"] = "en_PI";}
	   else if (assigned == 68) { FB_Properties["Language"] = "en_GB";}
	   else if (assigned == 69) { FB_Properties["Language"] = "el_GR";}
	   else if (assigned == 70) { FB_Properties["Language"] = "de_DE";}
	   else if (assigned == 71) { FB_Properties["Language"] = "da_DK";}
	   else if (assigned == 72) { FB_Properties["Language"] = "cy_GB";}
	   else if (assigned == 73) { FB_Properties["Language"] = "cx_PH";}
	   else if (assigned == 74) { FB_Properties["Language"] = "cs_CZ";}
	   else if (assigned == 75) { FB_Properties["Language"] = "ca_ES";}
	   else if (assigned == 76) { FB_Properties["Language"] = "bs_BA";}
	   else if (assigned == 77) { FB_Properties["Language"] = "bn_IN";}
	   else if (assigned == 78) { FB_Properties["Language"] = "bg_BG";}
	   else if (assigned == 79) { FB_Properties["Language"] = "be_BY";}
	   else if (assigned == 80) { FB_Properties["Language"] = "az_AZ";}
	   else if (assigned == 81) { FB_Properties["Language"] = "ar_AR";}
	   else if (assigned == 82) { FB_Properties["Language"] = "af_ZA";}
	   else  FB_Properties["Language"] = "en_US";
	   console.log("Web API -- API Language set to "+ FB_Properties["Language"]);
	   console.log("API -- (Web_Language_Set) Finished Setting Language");
}
function Web_Permission_Set(props)
{console.log("API -- (Web_Permission_Set) Begin Setting Permissions");
if (props[9] == 0) {FB_API["scope"] = "public_profile";}
	   if (props[10] == 0) {FB_API["scope"] = FB_API["scope"] +",user_friends";}
	   if (props[11] == 0) {FB_API["scope"] = FB_API["scope"] +",email";}
	   if (props[12] == 0) {FB_API["scope"] = FB_API["scope"] +",user_about_me";}
	   if (props[13] == 0) {FB_API["scope"] = FB_API["scope"] +",user_actions.books";}
	   if (props[14] == 0) {FB_API["scope"] = FB_API["scope"] +",user_actions.fitness";}
	   if (props[15] == 0) {FB_API["scope"] = FB_API["scope"] +",user_actions.music";}
	   if (props[16] == 0) {FB_API["scope"] = FB_API["scope"] +",user_actions.news";}
	   if (props[17] == 0) {FB_API["scope"] = FB_API["scope"] +",user_actions.video";}
	   if (props[18] == 0) {FB_API["scope"] = FB_API["scope"] +",user_activities";}
	   if (props[19] == 0) {FB_API["scope"] = FB_API["scope"] +",user_birthday";}
	   if (props[20] == 0) {FB_API["scope"] = FB_API["scope"] +",user_education_history";}
	   if (props[21] == 0) {FB_API["scope"] = FB_API["scope"] +",user_events";}
	   if (props[22] == 0) {FB_API["scope"] = FB_API["scope"] +",user_games_activity";}
	   if (props[23] == 0) {FB_API["scope"] = FB_API["scope"] +",user_groups";}		
	   if (props[24] == 0) {FB_API["scope"] = FB_API["scope"] +",user_hometown";}
           if (props[25] == 0) {FB_API["scope"] = FB_API["scope"] +",user_interests";}
	   if (props[26] == 0) {FB_API["scope"] = FB_API["scope"] +",user_likes";}
	   if (props[27] == 0) {FB_API["scope"] = FB_API["scope"] +",user_location";}
	   if (props[28] == 0) {FB_API["scope"] = FB_API["scope"] +",user_photos";}
	   if (props[29] == 0) {FB_API["scope"] = FB_API["scope"] +",user_relationships";}
	   if (props[30] == 0) {FB_API["scope"] = FB_API["scope"] +",user_relationship_details";}
	   if (props[31] == 0) {FB_API["scope"] = FB_API["scope"] +",user_religion_politics";}
	   if (props[32] == 0) {FB_API["scope"] = FB_API["scope"] +",user_status";}
	   if (props[33] == 0) {FB_API["scope"] = FB_API["scope"] +",user_tagged_places";}
	   if (props[34] == 0) {FB_API["scope"] = FB_API["scope"] +",user_videos";}
	   if (props[35] == 0) {FB_API["scope"] = FB_API["scope"] +",user_website";}
	   if (props[36] == 0) {FB_API["scope"] = FB_API["scope"] +",user_work_history";}
	   if (props[37] == 0) {FB_API["scope"] = FB_API["scope"] +",read_friendlists";}
	   if (props[38] == 0) {FB_API["scope"] = FB_API["scope"] +",read_insights";}
	   if (props[39] == 0) {FB_API["scope"] = FB_API["scope"] +",read_mailbox";}
	   if (props[40] == 0) {FB_API["scope"] = FB_API["scope"] +",read_page_mailboxes";}
	   if (props[41] == 0) {FB_API["scope"] = FB_API["scope"] +",read_stream";}
	   if (props[42] == 0) {FB_API["scope"] = FB_API["scope"] +",manage_notifications";}
	   if (props[43] == 0) {FB_API["scope"] = FB_API["scope"] +",manage_pages";}
	   if (props[44] == 0) {FB_API["scope"] = FB_API["scope"] +",publish_actions";}
	   if (props[45] == 0) {FB_API["scope"] = FB_API["scope"] +",rsvp_event";}
	   if (props[46] != ""){FB_API["scope"] = FB_API["scope"] +","+props[46];}
	   console.log("API -- (Web_Permission_Set) Finished Setting Permissions");
}
function Web_API_Set(props)
{console.log("API -- (Web_API_Set) Begin Setting Properties");
FB_Properties["App ID"] =   props[1];
	   FB_Properties["App Secret"] =  props[2];
	   if (props[4] == 0){FB_Properties["Cookie"] = true;}else{FB_Properties["Cookie"] = false;}
	   if (props[5] == 0){FB_Properties["Status"] = true;}else{FB_Properties["Status"] = false;}
	   if (props[6] == 0){FB_Properties["Frictionless Requests"] = true;}else{FB_Properties["Frictionless Requests"] = false;}
	   if (props[8] == "Available"){FB_Properties["Xfbml"] = true;}else{FB_Properties["Xfbml"] = false;}	
	   FB_Properties["Version"]=props[7];
	   console.log("API -- (Web_API_Set) Finished Setting Properties");
}
function Web_Load_API()
{console.log("API -- (Web_Load_API) Started Loading API");
window.fbAsyncInit = function()
	   {
	    FB.init({
                     appId      : FB_Properties["App ID"],
                     xfbml      : FB_Properties["Xfbml"],
		     cookie     : FB_Properties["Cookie"],
		     status     : FB_Properties["Status"],
	   frictionlessRequests : FB_Properties["Frictionless Requests"],
                     version    : FB_Properties["Version"]
                    });
		 FB_API["API READY"] = "Yes";
		 FB.Canvas.setAutoGrow();
		 FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.CON_API_ON_LOAD, FB_API["Instance"]);
		 FB.Event.subscribe('auth.statusChange', function(response)
		 {if(response.hasOwnProperty('status') == true)
                 {User["User Login Status"] = response.status;
                   if(response.hasOwnProperty('authResponse') == true && User["User Login Status"] == 'connected')
                   {
                     User["User ID"] = response.authResponse.userID;
		     User["User AccessToken"] = response.authResponse.accessToken;
	             User["User AccessToken Expires"] = response.authResponse.expiresIn;
                     Fetch_User("me",User["User AccessToken"],function(FU_Status)
		     {if (FU_Status == "success") {FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.CON_USER_SUCCESS, FB_API["Instance"]);}
		      else{FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.CON_USER_FAIL, FB_API["Instance"]);}
		  });FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.CON_USER_LOGIN, FB_API["Instance"]);
                    
                    
                   }
                   else
                    {User_Reset_Vars();
                     FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.CON_USER_SUCCESS, FB_API["Instance"]);
                     FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.CON_USER_LOGOUT, FB_API["Instance"]);    
                    }
                 }
                 console.log("API -- (Web_Load_API) Finished Loading API");
		 });
		 
		 
		};
		(function(d, s, id)
	        {
                 var js, fjs = d.getElementsByTagName(s)[0];
                 if (d.getElementById(id)) {return;}
                 js = d.createElement(s); js.id = id;
                 js.src = "https://connect.facebook.net/" + FB_Properties["Language"] + "/sdk.js";
                 fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));	
}
function check_app_Type(actiontype,type)
{
 if (FB_Properties["API Type"] != type){	
	 FB_API["API Error Code"] = "API_Type";
         FB_API["API Error Message"] = actiontype+" is action not compatible API type "+FB_Properties["API Type"]+". Switch API type to "+type;
         FB_API["API Error Type"] = actiontype;
	 FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.fail_api_generic, FB_API["Instance"]);
	 console.log("ACTS -- ("+actiontype+") Incompatible action with API type "+FB_Properties["API Type"]+". Switch API type to "+type);return false;}
 else{
	return true}
}
function web_call_Graphapi(url_get1,check_type1,apitoken1) 
	{var mes_type = '';
	 if(check_type1 == 0){mes_type = 'GET';}
	 else if(check_type1 == 1){mes_type = 'POST';}
	 else if(check_type1 == 2){mes_type = 'DELETE';}
	 else{mes_type = 'GET';}
	 $.ajax({url: "https://graph.facebook.com/"+url_get1 + "&access_token="+apitoken1,type: mes_type, dataType: 'text', crossDomain: true,
	 success: function(result)
	 {FB_API["GRAPH API DATA"] = result;console.log("ACTS -- (Graph DATA):"+result);
          FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.api_logged, FB_API["Instance"]);
         },
	 error:function(xhr){
	 FB_API["API Error Code"] = "Acts";
         FB_API["API Error Message"] = xhr;
         FB_API["API Error Type"] = "graphapi_call";
	 FB_API["Runtime"].trigger(cr.plugins_.Facebook2_1.prototype.cnds.fail_api_logged, FB_API["Instance"]);
	 }
        });	
	};
