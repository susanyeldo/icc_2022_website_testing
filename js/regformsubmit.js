function checkForm()
                    {
                      // validation fails if the input is blank
                      
                      /*
                      if(form.elements["entry.495363380"].value == "") 
                      {
                        
                        form.elements["entry.495363380"].focus();
                        return false;
                      }
                      
                      */

                      if(document.getElementById("teamname").value.length == 0)
                      {
                          document.getElementById("teamname").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("firstname1").value.length == 0)
                      {
                          document.getElementById("firstname1").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("email1").value.length == 0)
                      {
                          document.getElementById("email1").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("phone1").value.length == 0)
                      {
                          document.getElementById("phone1").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("college1").value.length == 0)
                      {
                          document.getElementById("college1").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }

                      else if(document.getElementById("ques1").value.length == 0)
                      {
                          document.getElementById("ques1").focus();
                          var mysubmit = document.getElementById('submit');
                          var displaySetting = submit.style.display;
                          mysubmit.style.display = 'block';
                          document.getElementById("submit").innerText = "Fill all compulsory fields and try again";

                      }
                      // validation was successful
                      
                      else {
                        document.regform.submit();
                        document.regform.reset();
                        var mysubmit = document.getElementById('submit');
                        var displaySetting = submit.style.display;
                        mysubmit.style.display = 'block';
                        document.getElementById("submit").innerText = "Registration Successful";
                        
                      }

                    }