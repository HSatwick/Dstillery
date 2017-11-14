

window.onload = function(){

    var container_pos_height = {
        1000: ['image_container_one'],
        1400: ['image_container_one', 'image_container_two']
    };

    var http_calls = {
        image_container_one: 'image1.json',
        image_container_two: 'image2.json'
    };

    var flags = {
        image_container_one: true,
        image_container_two: true
    };

    var xhr = new XMLHttpRequest();
    var covered_positions = Object.keys(container_pos_height);

    window.addEventListener('scroll', function(){
        var length = window.innerHeight + window.scrollY;
        if(covered_positions[0] < length){
            var total_containers = container_pos_height[covered_positions[0]];
            for(var t=0; t<total_containers.length; t++){
                if(flags[total_containers[t]]){
                    flags[total_containers[t]] = !flags[total_containers[t]];
                    xhr.open('GET', http_calls[total_containers[t]], true);
                    xhr.send();
                    elem = document.getElementById(total_containers[t]);
                    xhr.onreadystatechange = function(){
                        if(xhr.readyState == 4 && xhr.status == 200){
                            var result = JSON.parse(xhr.responseText);
                            var img = new Image();
                            img.src = result.path;
                            img.height = 300;
                            img.width = 400;
                            elem.appendChild(img);
                        }
                    };
                }
            }
        }
        if(covered_positions[1] < length){
            var total_containers = container_pos_height[covered_positions[1]];
            for(var u=0; u<total_containers.length; u++){
                if(flags[total_containers[u]]){
                    flags[total_containers[u]] = !flags[total_containers[u]];
                    xhr.open('GET', http_calls[total_containers[u]], true);
                    xhr.send();
                    elem = document.getElementById(total_containers[u]);
                    xhr.onreadystatechange = function(){
                        if(xhr.readyState == 4 && xhr.status == 200){
                            var result = JSON.parse(xhr.responseText);
                            var img = new Image();
                            img.src = result.path;
                            img.height = 300;
                            img.width = 400;
                            console.log(elem);
                            elem.appendChild(img);
                        }
                    };
                }
            }
        }
    });
};
