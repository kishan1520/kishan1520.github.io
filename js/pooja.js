$(Document).ready(function() {
    var count = 0;
    developer_animation();

    function developer_animation() {
        setTimeout(function() {
            count++;
            if (count == 1) {
                title = "D";
            } else if (count == 2) {
                title = "De";
            } else if (count == 3) {
                title = "Dev";
            } else if (count == 4) {
                title = "Deve";
            } else if (count == 5) {
                title = "Devel";
            } else if (count == 6) {
                title = "Develo";
            } else if (count == 7) {
                title = "Develop";
            } else if (count == 8) {
                title = "Develope";
            } else if (count == 9) {
                title = "Developer";
            }
            if (count != 10) {
                $('.title').text(`I'm a ${title}`);
                developer_animation();
            } else if (count == 10) {
                count = 0;
                setTimeout(function() {
                    designer_animation();
                }, 1000);
            }
        }, 100);
    }



    function designer_animation() {
        setTimeout(function() {
            count++;
            if (count == 1) {
                title = "D";
            } else if (count == 2) {
                title = "De";
            } else if (count == 3) {
                title = "Des";
            } else if (count == 4) {
                title = "Desi";
            } else if (count == 5) {
                title = "Desig";
            } else if (count == 6) {
                title = "Design";
            } else if (count == 7) {
                title = "Designe";
            } else if (count == 8) {
                title = "Designer";
            }

            if (count != 10) {
                $('.title').text(`I'm a ${title}`);
                designer_animation();
            } else if (count == 10) {
                count = 0;
                setTimeout(function() {
                    developer_animation();
                }, 1000);
            }
        }, 100);
    }
    var number = 0;
    start_position: while (true) {
        animates();

        function animates() {

            setTimeout(function() {
                $(".ja").animate({ fontSize: "+=40px" }, 500);
                $(".ja").animate({ letterSpacing: "+=15px" }, 1000);

                $(".ja").animate({ fontSize: "-=40px" }, 500);
                $(".ja").animate({ letterSpacing: "-=15px" }, 1000);


                $(".pyt").animate({ fontSize: "+=40px" }, 500);
                $(".pyt").animate({ letterSpacing: "+=15px" }, 1000);

                $(".pyt").animate({ fontSize: "-=40px" }, 500);
                $(".pyt").animate({ letterSpacing: "-=15px" }, 1000);
            }, 2000)

        }
        number++;

        if (number <= 1000) continue start_position;
        break;

    }
    $('.project_name').text('WorkRe');
    $('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.')

    var project_count = 1;
    $('.next').click(function() {
        if (project_count == 4) {
            project_count = 0;
        }
        project_count++;
        $('.actual_img').attr('src', '/img/pt' + project_count + '.jpg');
        if (project_count == 1) {
            $('.project_name').text('WorkRe');
            $('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.')
        } else if (project_count == 2) {
            $('.project_name').text('Electricity billing system ');
            $('.project_content').text('Electricity Billing System is a software-based application developed in Java programming language The project aims at serving the department of electricity by computerizing the billing system.');
        } else if (project_count == 3) {
            $('.project_name').text('IOT Home Security Modeln');
            $('.project_content').text('This system continuously monitors the activities in the home and if there is any harmful activity it is intimated to the owner.');
        } else if (project_count == 4) {
            $('.project_name').text('My Resume');
            $('.project_content').text('It is the website of my resume. It is designed using HTML,CSS and JAVA Script.');
        }

    });

    $('.prev').click(function() {
        if (project_count == 1) {
            project_count = 5;
        }
        project_count--;
        $('.actual_img').attr('src', '/img/pt' + project_count + '.jpg');
        if (project_count == 1) {
            $('.project_name').text('WorkRe');
            $('.project_content').text('This application contains a list of all work cafes near you, you can make booking in any cafes you want by selecting the time and date at which you will be arriving at the cafe.');
        } else if (project_count == 2) {
            $('.project_name').text('Electricity billing system ');
            $('.project_content').text('Electricity Billing System is a software-based application developed in Java programming language The project aims at serving the department of electricity by computerizing the billing system.');
        } else if (project_count == 3) {
            $('.project_name').text('IOT Home Security Modeln');
            $('.project_content').text('This system continuously monitors the activities in the home and if there is any harmful activity it is intimated to the owner.');
        } else if (project_count == 4) {
            $('.project_name').text('My Resume');
            $('.project_content').text('It is the website of my resume. It is designed using HTML,CSS and JAVA Script.');

        }

    });
})