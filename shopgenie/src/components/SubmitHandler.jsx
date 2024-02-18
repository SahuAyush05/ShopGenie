export default function submitHandler(event){
    event.preventDefault();

    const fd=new FormData(event.target);
    const data=Object.fromEntries(fd.entries());
    
    // data.acquisition = acquisitionChannel;
    
    console.log(data.userName);
    console.log(data.password);

    async function fetchData() {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  
                  username: data.userName,
                  password: data.password,
                })
              })

            const data2 = await response.json();
            console.log(data2.token);

            async function checkData(){
                try{
                    const response2 = await fetch('https://dummyjson.com/auth/me', {
                        method: 'GET',
                        headers: {
                          'Authorization': `Bearer ${data2.token}`, 
                        }, 
                      })

                      const data3 = await response2.json();
                      console.log(data3);
                }
                catch(error){
                    console.error('Error fetching data:', error);
                }
            }
            checkData();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchData();
    // event.target.reset();
}