$(document).ready(function () {

    $('#reset_button').on('click', function () {
        alert("You are clearing the games");
        window.location.href = 'index.html';
    });

    var player_one_turn = true;
    var player_two_turn = false;
    var player_one_win_counter = 0;
    var player_two_win_counter = 0;
    var tie_counter = 0;
    var marker = "O";
    var positions_marked = 0;
    var board = [['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']];

    function winner() {
        //diagonal checks
        if (((board[0][0] === board[1][1] && board[1][1] === board[2][2]
                && board[1][1] !== '-' && board[0][0] !== '-' && board[2][2] !== '-')
                || (board[0][2] === board[1][1] && board[1][1] === board[2][0]
                    && board[0][2] !== '-' && board[2][0] !== '-' && board[1][1] !== '-'))) {
            return true;
        }
        //horizontal checks
        if ((board[0][0] === board[0][1] && board[0][1] === board[0][2])
            && board[0][1] !== '-' && board[0][1] !== '-' && board[0][2] !== '-') {
            return true;
        }
        else if ((board[1][0] === board[1][1] && board[1][1] === board[1][2])
            && board[1][0] !== '-' && board[1][1] !== '-' && board[1][2] !== '-') {
            return true;
        }
        else if ((board[2][0] === board[2][1] && board[2][1] === board[2][2])
            && board[2][0] !== '-' && board[2][1] !== '-' && board[2][2] !== '-') {
            return true;
        }

        //vertical checks
        if ((board[0][0] === board[1][0] && board[1][0] === board[2][0])
            && board[0][0] !== '-' && board[1][0] !== '-' && board[2][0] !== '-') {
            return true;
        }
        else if ((board[0][1] === board[1][1] && board[1][1] === board[2][1])
            && board[0][1] !== '-' && board[1][1] !== '-' && board[2][1] !== '-') {
            return true;
        }
        else if ((board[0][2] === board[1][2] && board[1][2] === board[2][2])
            && board[0][2] !== '-' && board[1][2] !== '-' && board[2][2] !== '-') {
            return true;
        }

        return false;
    }

    function reset_board() {
        if (player_one_turn) {
            $('#player_turn').text('Player 1');
        }
        if(player_two_turn){
            $('#player_turn').text('Player 2');
        }
        $('#marker').text('O');
        $('#0_0').text('');
        $('#0_1').text('');
        $('#0_2').text('');
        $('#1_0').text('');
        $('#1_1').text('');
        $('#1_2').text('');
        $('#2_0').text('');
        $('#2_1').text('');
        $('#2_2').text('');
        board = [['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']];
        marker = 'O';
        positions_marked = 0;
    }

    function displayWinner() {
        if (player_two_turn) {
            alert('Player One Wins!!');
            player_one_win_counter++;
            $('#player_1').text(player_one_win_counter);
            $('#winner_name').text('Player 1');
            // player_one_turn = true;
            // player_two_turn = false;
        } else {
            alert('Player Two Wins!!');
            player_two_win_counter++;
            $('#player_2').text(player_two_win_counter);
            $('#winner_name').text('Player 2');
            // player_one_turn = true;
            // player_two_turn = false;
        }
        reset_board();
    }

    $('#0_0').on('click', function () {
        if (board[0][0] === "-") {
            $('#0_0').text(marker);
            board[0][0] = marker;
            marker = (marker === 'O') ? 'X' : 'O';
            $('#marker').text(marker);
            if (player_one_turn) {
                $('#player_turn').text('Player 2');
                player_two_turn = true;
                player_one_turn = false;
            } else {
                $('#player_turn').text('Player 1');
                player_two_turn = false;
                player_one_turn = true;
            }
            positions_marked++;
            if (winner()) {
                displayWinner();
            }
            else if (positions_marked == 9) {
                alert('Tie');
                tie_counter++;
                $('#ties').text(tie_counter);
                $('#winner_name').text('N/A');
                reset_board();
            }
        } else {
            alert("Please make a move in an empty spot");
        }
    });

    $('#0_1').on('click', function () {
        if (board[0][1] === "-") {
            $('#0_1').text(marker);
            board[0][1] = marker;
            marker = (marker === 'O') ? 'X' : 'O';
            $('#marker').text(marker);
            if (player_one_turn) {
                $('#player_turn').text('Player 2');
                player_two_turn = true;
                player_one_turn = false;
            } else {
                $('#player_turn').text('Player 1');
                player_two_turn = false;
                player_one_turn = true;
            }
            positions_marked++;
            if (winner()) {
                displayWinner();
            }
            else if (positions_marked == 9) {
                alert('Tie');
                tie_counter++;
                $('#ties').text(tie_counter);
                $('#winner_name').text('N/A');
                reset_board();
            }
        } else {
            alert("Please make a move in an empty spot");
        }
    });

    $('#0_2').on('click', function () {
        if (board[0][2] === "-") {
            $('#0_2').text(marker);
            board[0][2] = marker;
            marker = (marker === 'O') ? 'X' : 'O';
            $('#marker').text(marker);
            if (player_one_turn) {
                $('#player_turn').text('Player 2');
                player_two_turn = true;
                player_one_turn = false;
            } else {
                $('#player_turn').text('Player 1');
                player_two_turn = false;
                player_one_turn = true;
            }
            positions_marked++;
            if (winner()) {
                displayWinner();
            }
            else if (positions_marked == 9) {
                alert('Tie');
                tie_counter++;
                $('#ties').text(tie_counter);
                $('#winner_name').text('N/A');
                reset_board();
            }
        } else {
            alert("Please make a move in an empty spot");
        }
    });

    $('#1_0').on('click', function () {
        if (board[1][0] === "-") {
            $('#1_0').text(marker);
            board[1][0] = marker;
            marker = (marker === 'O') ? 'X' : 'O';
            $('#marker').text(marker);
            if (player_one_turn) {
                $('#player_turn').text('Player 2');
                player_two_turn = true;
                player_one_turn = false;
            } else {
                $('#player_turn').text('Player 1');
                player_two_turn = false;
                player_one_turn = true;
            }
            positions_marked++;
            if (winner()) {
                displayWinner();
            }
            else if (positions_marked == 9) {
                alert('Tie');
                tie_counter++;
                $('#ties').text(tie_counter);
                $('#winner_name').text('N/A');
                reset_board();
            }
        } else {
            alert("Please make a move in an empty spot");
        }
    });

    $('#1_1').on('click', function () {
        if (board[1][1] === "-") {
            $('#1_1').text(marker);
            board[1][1] = marker;
            marker = (marker === 'O') ? 'X' : 'O';
            $('#marker').text(marker);
            if (player_one_turn) {
                $('#player_turn').text('Player 2');
                player_two_turn = true;
                player_one_turn = false;
            } else {
                $('#player_turn').text('Player 1');
                player_two_turn = false;
                player_one_turn = true;
            }
            positions_marked++;
            if (winner()) {
                displayWinner();
            }
            else if (positions_marked == 9) {
                alert('Tie');
                tie_counter++;
                $('#ties').text(tie_counter);
                $('#winner_name').text('N/A');
                reset_board();
            }
        } else {
            alert("Please make a move in an empty spot");
        }
    });

    $('#1_2').on('click', function () {
        if (board[1][2] === "-") {
            $('#1_2').text(marker);
            board[1][2] = marker;
            marker = (marker === 'O') ? 'X' : 'O';
            $('#marker').text(marker);
            if (player_one_turn) {
                $('#player_turn').text('Player 2');
                player_two_turn = true;
                player_one_turn = false;
            } else {
                $('#player_turn').text('Player 1');
                player_two_turn = false;
                player_one_turn = true;
            }
            positions_marked++;
            if (winner()) {
                displayWinner();
            }
            else if (positions_marked == 9) {
                alert('Tie');
                tie_counter++;
                $('#ties').text(tie_counter);
                $('#winner_name').text('N/A');
                reset_board();
            }
        } else {
            alert("Please make a move in an empty spot");
        }
    });

    $('#2_0').on('click', function () {
        if (board[2][0] === "-") {
            $('#2_0').text(marker);
            board[2][0] = marker;
            marker = (marker === 'O') ? 'X' : 'O';
            $('#marker').text(marker);
            if (player_one_turn) {
                $('#player_turn').text('Player 2');
                player_two_turn = true;
                player_one_turn = false;
            } else {
                $('#player_turn').text('Player 1');
                player_two_turn = false;
                player_one_turn = true;
            }
            positions_marked++;
            if (winner()) {
                displayWinner();
            }
            else if (positions_marked == 9) {
                alert('Tie');
                tie_counter++;
                $('#ties').text(tie_counter);
                $('#winner_name').text('N/A');
                reset_board();
            }
        } else {
            alert("Please make a move in an empty spot");
        }
    });

    $('#2_1').on('click', function () {
        if (board[2][1] === "-") {
            $('#2_1').text(marker);
            board[2][1] = marker;
            marker = (marker === 'O') ? 'X' : 'O';
            $('#marker').text(marker);
            if (player_one_turn) {
                $('#player_turn').text('Player 2');
                player_two_turn = true;
                player_one_turn = false;
            } else {
                $('#player_turn').text('Player 1');
                player_two_turn = false;
                player_one_turn = true;
            }
            positions_marked++;
            if (winner()) {
                displayWinner();
            }
            else if (positions_marked == 9) {
                alert('Tie');
                tie_counter++;
                $('#ties').text(tie_counter);
                $('#winner_name').text('N/A');
                reset_board();
            }
        } else {
            alert("Please make a move in an empty spot");
        }
    });

    $('#2_2').on('click', function () {
        if (board[2][2] === "-") {
            $('#2_2').text(marker);
            board[2][2] = marker;
            marker = (marker === 'O') ? 'X' : 'O';
            $('#marker').text(marker);
            if (player_one_turn) {
                $('#player_turn').text('Player 2');
                player_two_turn = true;
                player_one_turn = false;
            } else {
                $('#player_turn').text('Player 1');
                player_two_turn = false;
                player_one_turn = true;
            }
            positions_marked++;
            if (winner()) {
                displayWinner();
            }
            else if (positions_marked == 9) {
                alert('Tie');
                tie_counter++;
                $('#ties').text(tie_counter);
                $('#winner_name').text('N/A');
                reset_board();
            }
        } else {
            alert("Please make a move in an empty spot");
        }
    });


});